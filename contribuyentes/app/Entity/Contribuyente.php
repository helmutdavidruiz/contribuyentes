<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Entity\Traits\HasTimestamps;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\ORM\Mapping\OneToMany;

use Doctrine\Common\Collections\Collection;

#[Entity, Table ('contribuyentes')]
#[HasLifecycleCallbacks]
class Contribuyente{

    use HasTimestamps;

     #[Id, Column(options: ['unsigned' => true]), GeneratedValue]
    private int $id;

    #[Column]
    private string $nombres;

    #[Column]
    private string $apellidos;

    #[Column]
    private string $rfc;

       #[Column]
    private string $curp;

    #[Column]
    private string $telefono;

    #[Column]
    private string $email;

    #[Column (name: 'regimen_fiscal')]
    private string $regimenFiscal;
    

    #[Column (name: 'tipo_declaracion')]
    private string $tipoDeclaracion;

    #[Column (name: 'impuesto_obligacion')]
    private string $impuestoObligacion;

      #[Column]
     private string $identificador;


    #[ManyToOne(inversedBy:'contribuyentes')]
    private User $user;

    #[OneToMany(mappedBy:'contribuyente', targetEntity: Honorario::class)]
    private Collection $honorarios;

    public function __construct(){

        $this->honorarios = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getNombres(): string
    {
        return $this->nombres;
    }

    public function setNombres(string $nombres): Contribuyente
    {
        $this->nombres = $nombres;

        return $this;
    }



    public function getApellidos(): string
    {
        return $this->apellidos;
    }

    public function setApellidos(string $apellidos): Contribuyente
    {
        $this->apellidos = $apellidos;

        return $this;
    }


     public function getRfc(): string
    {
        return $this->rfc;
    }

    public function setRfc(string $rfc): Contribuyente
    {
        $this->rfc = $rfc;

        return $this;
    }


         public function getCurp(): string
    {
        return $this->curp;
    }

    public function setCurp(string $curp): Contribuyente
    {
        $this->curp = $curp;

        return $this;
    }


     public function getTelefono(): string
    {
        return $this->telefono;
    }

    public function setTelefono(string $telefono): Contribuyente
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): Contribuyente
    {
        $this->email = $email;

        return $this;
    }

    public function getRegimenFiscal(): string
    {
        return $this->regimenFiscal;
    }

    public function setRegimenFiscal(string $regimenFiscal): Contribuyente
    {
        $this->regimenFiscal = $regimenFiscal;

        return $this;
    }

     public function getTipoDeclaracion(): string
    {
        return $this->tipoDeclaracion;
    }

    public function setTipoDeclaracion(string $tipoDeclaracion): Contribuyente
    {
        $this->tipoDeclaracion = $tipoDeclaracion;

        return $this;
    }

      public function getImpuestoObligacion(): string
    {
        return $this->impuestoObligacion;
    }

    public function setImpuestoObligacion(string $impuestoObligacion): Contribuyente
    {
        $this->impuestoObligacion = $impuestoObligacion;

        return $this;
    }

        public function getIdentificador(): string
    {
        return $this->identificador;
    }

    public function setIdentificador(string $identificador): Contribuyente
    {
        $this->identificador = $identificador;

        return $this;
    }
    

        public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): Contribuyente
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): \DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTime $updatedAt): Contribuyente
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

     public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): Contribuyente
    {
        $user->addContribuyente($this);

        $this->user = $user;

        return $this;
    }

      public function getHonorarios(): ArrayCollection|Collection
    {
        return $this->honorarios;
    }

    public function addHonorario(Honorario $honorario): Contribuyente
    {
        $this->honorarios->add($honorario);

        return $this;
    }
}