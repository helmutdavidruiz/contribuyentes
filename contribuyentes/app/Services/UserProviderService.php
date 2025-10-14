<?php
declare(strict_types=1);
namespace App\Services;

use App\Contracts\UserProviderServiceInterface;
use App\Contracts\UserInterface;
use Doctrine\ORM\EntityManager;
use App\Entity\User;
use App\DataObjects\RegisterUserData;

class UserProviderService implements UserProviderServiceInterface{

    public function __construct(private readonly EntityManager $entityManager){

    }

    public function getById(int $userId):UserInterface{

      return $this->entityManager->find(User::class,$userId);


    }

    public function getByCredentials(array $credentials): ?UserInterface{

         return $this->entityManager->getRepository(User::class)->findOneBy(['email' => $credentials['email']]);



    }

    public function createUser(RegisterUserData $data): UserInterface{

       $user = new User();



        $user->setNombre($data->nombre);
        $user->setEmail($data->email);
        $user->setPassword(password_hash($data->password,PASSWORD_BCRYPT, ['cost' => 12]));

        $this->entityManager->persist($user);
          $this->entityManager->flush();

          return $user;

    }
}