<?php
declare(strict_types = 1);

namespace App\Entity;

use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\Common\Collections\Collection;
use App\Entity\Traits\HasTimestamps;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;

#[Entity, Table ('honorarios')]
#[HasLifecycleCallbacks]
class Honorario{

    use HasTimestamps;

     #[Id, Column(options: ['unsigned' => true]), GeneratedValue]
    private int $id;

    #[Column]
    private DateTime $fecha;

    #[Column(type: Types::DECIMAL,precision: 13,scale: 3)]
    private float $honorario;

    #[Column(type: Types::DECIMAL,precision: 13,scale: 3)]

    private float $impuesto;

    #[Column(type: Types::DECIMAL,precision: 13,scale: 3)]
    private float $transferencia;

    #[Column(type: Types::DECIMAL,precision: 13,scale: 3)]
    private float $total;

    #[Column]
    private string $concepto;

    #[Column]
    private string $observaciones;


 


    #[ManyToOne(inversedBy: 'honorarios')]
    private User $user;

    #[ManyToOne(inversedBy: 'honorarios')]
    private Contribuyente $contribuyente;

    #[OneToMany(mappedBy: 'honorario', targetEntity: Recibo::class)]
    private Collection $recibos;

    public function __construct(){

        $this->recibos = new ArrayCollection();
    }

     public function getId(): int
    {
        return $this->id;
    }

      public function getFecha(): DateTime
    {
        return $this->fecha;
    }

    public function setFecha(DateTime $fecha): Honorario
    {
        $this->fecha = $fecha;

        return $this;
    }

  
 

    public function getHonorario(): float
    {
        return $this->honorario;
    }

    public function setHonorario(float $honorario): Honorario
    {
        $this->honorario = $honorario;

        return $this;
    }

      public function getImpuesto(): float
    {
        return $this->impuesto;
    }

    public function setImpuesto(float $impuesto): Honorario
    {
        $this->impuesto = $impuesto;

        return $this;
    }

       public function getTransferencia(): float
    {
        return $this->transferencia;
    }

    public function setTransferencia(float $transferencia): Honorario
    {
        $this->transferencia = $transferencia;

        return $this;
    }

         public function getTotal(): float
    {
        return $this->total;
    }

    public function setTotal(float $total): Honorario
    {
        $this->total = $total;

        return $this;
    }



         public function getObservaciones(): string
    {
        return $this->observaciones;
    }

    public function setObservaciones(string $observaciones): Honorario
    {
        $this->observaciones = $observaciones;

        return $this;
    }

         public function getConcepto(): string
    {
        return $this->concepto;
    }

    public function setConcepto(string $concepto): Honorario
    {
        $this->concepto = $concepto;

        return $this;
    }




    public function getCreatedAt(): DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTime $createdAt): Honorario
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(DateTime $updatedAt): Honorario
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

      public function setUser(User $user): Honorario
    {
        $user->addHonorario($this);

        $this->user = $user;

        return $this;
    }

     public function getContribuyente(): Contribuyente
    {
        return $this->contribuyente;
    }

    public function setContribuyente(Contribuyente $contribuyente): Honorario
    {
        $contribuyente->addHonorario($this);

        $this->contribuyente = $contribuyente;

        return $this;
    }

    public function getRecibos(): ArrayCollection|Collection
    {
        return $this->recibos;
    }

    public function addRecibo(Recibo $recibo): Honorario
    {
        $this->recibos->add($recibo);

        return $this;
    }

}