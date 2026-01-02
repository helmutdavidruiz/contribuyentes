<?php
declare(strict_types=1);
namespace App\Services;


use App\DataObjects\ContribuyenteData;
use App\Entity\Contribuyente;
use App\Contracts\EntityManagerServiceInterface;
use App\Entity\User;
use Doctrine\ORM\Tools\Pagination\Paginator;
use App\DataObjects\DataTableQueryParams;

 class ContribuyenteService{


    public function __construct(private readonly EntityManagerServiceInterface $entityManager){

    }
    public function crear(ContribuyenteData $data , User $user): Contribuyente{

         $contribuyente = new Contribuyente();


        $contribuyente->setUser($user);
        return $this->store($contribuyente,$data);

    }



     public function store(Contribuyente $contribuyente, ContribuyenteData $data): Contribuyente
    {
        $contribuyente->setNombres(strtoupper($data->nombres));
        $contribuyente->setApellidos(strtoupper($data->apellidos));
        $contribuyente->setRfc(strtoupper($data->rfc));
        $contribuyente->setCurp(strtoupper($data->curp));
        $contribuyente->setTelefono($data->telefono);
        $contribuyente->setEmail(strtoupper($data->email));
        $contribuyente->setRegimenFiscal(strtoupper($data->regimenFiscal));
        $contribuyente->setTipoDeclaracion(strtoupper($data->tipoDeclaracion));
        $contribuyente->setImpuestoObligacion(strtoupper($data->impuestoObligacion));
        $contribuyente->setIdentificador('');

        return $contribuyente;
    }
      public function actualizar(Contribuyente $contribuyente, ContribuyenteData $data): Contribuyente
    {
        $contribuyente->setNombres(strtoupper($data->nombres));
        $contribuyente->setApellidos(strtoupper($data->apellidos));
        $contribuyente->setRfc(strtoupper($data->rfc));
        $contribuyente->setCurp(strtoupper($data->curp));
        $contribuyente->setTelefono($data->telefono);
        $contribuyente->setEmail(strtoupper($data->email));
        $contribuyente->setRegimenFiscal(strtoupper($data->regimenFiscal));
        $contribuyente->setTipoDeclaracion(strtoupper($data->tipoDeclaracion));
        $contribuyente->setImpuestoObligacion(strtoupper($data->impuestoObligacion));
       # $contribuyente->setIdentificador(str_pad($contribuyente->getId().$this->getCaracteres($data->nombres).$this->getCaracteres($data->apellidos),5,'0'));
        
        return $contribuyente;
    }

    public function getCaracteres(string $data): string{

          
        $arrayData = explode(" ", $data);
  
          $cadena='';
          foreach ($arrayData as $str) {
       
            $cadena.=substr($str,0,1);
           }

           return strtoupper($cadena);

    }

    public function getContribuyentes():array{

      return $this->entityManager->getRepository(Contribuyente::class)->findAll();
    }


    public function getCount():int{

      $repoContribuyentes= $this->entityManager->getRepository(Contribuyente::class);

      $totalContribuyentes = $repoContribuyentes->createQueryBuilder('c')
            ->select('count(c.id)')
            ->getQuery()
            ->getSingleScalarResult();
        
         if ($totalContribuyentes === 0)
            return    $totalContribuyentes=1;

       return ++$totalContribuyentes;
    }



     public function getById(int $id): ?Contribuyente
    {
        return $this->entityManager->find(Contribuyente::class, $id);
    }

     public function getPaginatedContribuyentes(DataTableQueryParams $params): Paginator
    {
        $query = $this->entityManager
            ->getRepository(Contribuyente::class)
            ->createQueryBuilder('c')
            ->setFirstResult($params->start)
            ->setMaxResults($params->length);

         
         
        $orderBy  = in_array($params->orderBy, ['nombres', 'apellidos', 'rfc', 'curp', 'telefono', 'email', 'regimenFiscal', 'tipoDeclaracion','impuestoObligacion', 'identificador']) ? $params->orderBy : 'clasificacion';
        $orderDir = strtolower($params->orderDir) === 'asc' ? 'asc' : 'desc';

        if (! empty($params->searchTerm)) {
            $query->where('c.nombres LIKE :nombres')->setParameter('nombres', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.apellidos LIKE :apellidos')->setParameter('apellidos', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.rfc LIKE :rfc')->setParameter('rfc', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.curp LIKE :curp')->setParameter('curp', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.telefono LIKE :telefono')->setParameter('telefono', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.email LIKE :email')->setParameter('email', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.regimenFiscal LIKE :regimenFiscal')->setParameter('regimenFiscal', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.tipoDeclaracion LIKE :tipoDeclaracion')->setParameter('tipoDeclaracion', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.impuestoObligacion LIKE :impuestoObligacion')->setParameter('impuestoObligacion', '%' . addcslashes($params->searchTerm, '%_') . '%')
                  ->orWhere('c.identificador LIKE :identificador')->setParameter('identificador', '%' . addcslashes($params->searchTerm, '%_') . '%');




        }

        $query->orderBy('c.' . $orderBy, $orderDir);

        return new Paginator($query);
    }

     public function getIdentificadorContribuyentes(): array
    {
        return $this->entityManager->getRepository(Contribuyente::class)->createQueryBuilder('c')
            ->select('c.id', 'c.identificador')
            ->getQuery()
            ->getArrayResult();
    }

     public function getTopContribuyentesMayorImpuestos(int $limit): array
    {
        $query = $this->entityManager->createQuery(
            'SELECT c.identificador, SUM(ABS(t.total)) as total
             FROM App\Entity\Honorario t
             JOIN t.contribuyente c
             WHERE t.total > 0
             GROUP BY c.id
             ORDER BY total DESC'
        );

        
        $query->setMaxResults($limit);

        return $query->getArrayResult();
    }


     public function getSoloContribuyentes(): array
    {

        $query = $this->entityManager->createQuery(
            'SELECT c
             FROM  App\Entity\Contribuyente c'
        );

        return $query->getArrayResult();
    }

    public function getSoloHonorarios(): array
    {

        $query = $this->entityManager->createQuery(
            'SELECT h, c.identificador
             FROM  App\Entity\Honorario h
             JOIN h.contribuyente c'
        );

        return $query->getArrayResult();
    }


}