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
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\Common\Collections\Collection;

use Doctrine\ORM\Mapping\HasLifecycleCallbacks;

use App\Contracts\UserInterface;


#[Entity, Table ('users')]
#[HasLifecycleCallbacks]
class User implements UserInterface{

    use HasTimestamps;

    #[Id, Column(options: ['unsigned' => true]), GeneratedValue]
    private int $id;

    #[Column]
    private string $nombre;

    #[Column]
    private string $password;

    #[Column]
    private string $email;

  

    #[OneToMany(mappedBy:'user', targetEntity: Contribuyente::class)]
    public Collection $contribuyentes;

     #[OneToMany(mappedBy:'user', targetEntity: Honorario::class)]
    public Collection $honorarios;

    public function __construct(){

        $this->contribuyentes = new ArrayCollection();
        $this->honorarios = new ArrayCollection();
    }


    public function getId(): int
    {
        return $this->id;
    }

   
    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): User
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): User
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): User
    {
        $this->password = $password;

        return $this;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): User
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): \DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTime $updatedAt): User
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

       public function getContribuyentes(): ArrayCollection|Collection
    {
        return $this->contribuyentes;
    }

    public function addContribuyente(contribuyente $contribuyente): User
    {
        $this->contribuyentes->add($contribuyente);

        return $this;
    }

    public function getHonorarios(): ArrayCollection|Collection
    {
        return $this->honorarios;
    }

    public function addHonorario(Honorario $honorario): User
    {
        $this->honorarios->add($honorario);

        return $this;
    }
}