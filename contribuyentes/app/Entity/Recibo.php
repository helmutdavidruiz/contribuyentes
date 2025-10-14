<?php
declare(strict_types = 1);

namespace App\Entity;

use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\ManyToOne;

#[Entity, Table ('recibos')]

class Recibo{

     #[Id, Column(options: ['unsigned' => true]), GeneratedValue]
    private int $id;

    #[Column]
    private string $fileName;


    #[Column(name: 'created_at')]
    private \DateTime $createdAt;

    #[Column(name: 'updated_at')]
    private \DateTime $updatedAt;

    #[ManyToOne(inversedBy: 'recibos')]
    private Honorario $honorario;

      public function getId(): int
    {
        return $this->id;
    }

    public function getFileName(): string
    {
        return $this->fileName;
    }

    public function setFileName(string $fileName): Recibo
    {
        $this->fileName = $fileName;

        return $this;
    }

            public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): Recibo
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): \DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTime $updatedAt): Recibo
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }


      public function getHonorario(): Honorario
    {
        return $this->honorario;
    }

    public function setTransaction(Honorario $honorario): Recibo
    {
        $honorario->addRecibo($this);

        $this->honorario = $honorario;

        return $this;
    }
}