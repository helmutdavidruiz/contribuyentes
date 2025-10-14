<?php

declare(strict_types = 1);

namespace App\Services;

use App\DataObjects\DataTableQueryParams;
use App\DataObjects\HonorarioData;
use App\Entity\Honorario;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Pagination\Paginator;

class HonorarioService
{
    public function __construct(private readonly EntityManager $entityManager)
    {
    }

    public function create(HonorarioData $honorarioData, User $user): Honorario
    {
        $honorario = new Honorario();

        $honorario->setUser($user);

        return $this->update($honorario, $honorarioData);
    }

    public function getPaginatedHonorarios(DataTableQueryParams $params): Paginator
    {
        $query = $this->entityManager
            ->getRepository(Honorario::class)
            ->createQueryBuilder('t')
            ->leftJoin('t.contribuyente', 'c')
            ->setFirstResult($params->start)
            ->setMaxResults($params->length);

        $orderBy  = in_array($params->orderBy, ['fecha', 'honorario', 'impuesto','transferencia','total','concepto','observaciones', 'contribuyente'])
            ? $params->orderBy
            : 'fecha';
        $orderDir = strtolower($params->orderDir) === 'asc' ? 'asc' : 'desc';

        if (! empty($params->searchTerm)) {
            $query->where('t.concepto LIKE :concepto')->setParameter('concepto', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('t.observaciones LIKE :observaciones')->setParameter('observaciones', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('t.honorario LIKE :honorario')->setParameter('honorario', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('t.impuesto LIKE :impuesto')->setParameter('impuesto', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('t.transferencia LIKE :transferencia')->setParameter('transferencia', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.identificador LIKE :identificador')->setParameter('identificador', '%' . addcslashes($params->searchTerm, '%_') . '%');

        }

        if ($orderBy === 'contribuyente') {
            $query->orderBy('c.identificador', $orderDir);
        } else {
            $query->orderBy('t.' . $orderBy, $orderDir);
        }

        return new Paginator($query);
    }

    public function delete(int $id): void
    {
        $honorario = $this->entityManager->find(Honorario::class, $id);

        $this->entityManager->remove($honorario);
        $this->entityManager->flush();
    }

    public function getById(int $id): ?Honorario
    {
        return $this->entityManager->find(Honorario::class, $id);
    }

    public function update(Honorario $honorario, HonorarioData $honorarioData): Honorario
    {
        $honorario->setFecha($honorarioData->fecha);
        $honorario->setHonorario($honorarioData->honorario);
        $honorario->setImpuesto($honorarioData->impuesto);
        $honorario->setTransferencia($honorarioData->transferencia);
        $total = $honorarioData->honorario+$honorarioData->impuesto+$honorarioData->transferencia;
        $honorario->setTotal($total);
        $honorario->setConcepto($honorarioData->concepto);
        $honorario->setObservaciones($honorarioData->observaciones);
        $honorario->setContribuyente($honorarioData->contribuyente);

        $this->entityManager->persist($honorario);
        $this->entityManager->flush();

        return $honorario;
    }
}