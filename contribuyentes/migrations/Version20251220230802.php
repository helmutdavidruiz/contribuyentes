<?php

declare(strict_types=1);

namespace Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251220230802 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contribuyentes (id INT UNSIGNED AUTO_INCREMENT NOT NULL, user_id INT UNSIGNED DEFAULT NULL, nombres VARCHAR(255) NOT NULL, apellidos VARCHAR(255) NOT NULL, rfc VARCHAR(255) NOT NULL, curp VARCHAR(255) NOT NULL, telefono VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, regimen_fiscal VARCHAR(255) NOT NULL, tipo_declaracion VARCHAR(255) NOT NULL, impuesto_obligacion VARCHAR(255) NOT NULL, identificador VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_8D8623C5A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE honorarios (id INT UNSIGNED AUTO_INCREMENT NOT NULL, user_id INT UNSIGNED DEFAULT NULL, contribuyente_id INT UNSIGNED DEFAULT NULL, fue_revisado TINYINT(1) DEFAULT 0 NOT NULL, fecha DATETIME NOT NULL, honorario NUMERIC(13, 3) NOT NULL, impuesto NUMERIC(13, 3) NOT NULL, transferencia NUMERIC(13, 3) NOT NULL, total NUMERIC(13, 3) NOT NULL, concepto VARCHAR(255) NOT NULL, observaciones VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_551ED163A76ED395 (user_id), INDEX IDX_551ED1639A84072B (contribuyente_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE password_resets (id INT UNSIGNED AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, token VARCHAR(255) NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, expiration DATETIME NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_9EDAFEA15F37A13B (token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recibos (id INT UNSIGNED AUTO_INCREMENT NOT NULL, honorario_id INT UNSIGNED DEFAULT NULL, fileName VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_46247D21316A57EC (honorario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contribuyentes ADD CONSTRAINT FK_8D8623C5A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE honorarios ADD CONSTRAINT FK_551ED163A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE honorarios ADD CONSTRAINT FK_551ED1639A84072B FOREIGN KEY (contribuyente_id) REFERENCES contribuyentes (id)');
        $this->addSql('ALTER TABLE recibos ADD CONSTRAINT FK_46247D21316A57EC FOREIGN KEY (honorario_id) REFERENCES honorarios (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contribuyentes DROP FOREIGN KEY FK_8D8623C5A76ED395');
        $this->addSql('ALTER TABLE honorarios DROP FOREIGN KEY FK_551ED163A76ED395');
        $this->addSql('ALTER TABLE honorarios DROP FOREIGN KEY FK_551ED1639A84072B');
        $this->addSql('ALTER TABLE recibos DROP FOREIGN KEY FK_46247D21316A57EC');
        $this->addSql('DROP TABLE contribuyentes');
        $this->addSql('DROP TABLE honorarios');
        $this->addSql('DROP TABLE password_resets');
        $this->addSql('DROP TABLE recibos');
        $this->addSql('DROP TABLE users');
    }
}
