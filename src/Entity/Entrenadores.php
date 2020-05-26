<?php

namespace App\Entity;

use App\Repository\EntrenadoresRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EntrenadoresRepository::class)
 */
class Entrenadores
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Usuarios::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false, onDelete="CASCADE")
     */
    private $usuarios;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titulacion;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsuarios(): ?Usuarios
    {
        return $this->usuarios;
    }

    public function setUsuarios(Usuarios $usuarios): self
    {
        $this->usuarios = $usuarios;

        return $this;
    }

    public function getTitulacion(): ?string
    {
        return $this->titulacion;
    }

    public function setTitulacion(string $titulacion): self
    {
        $this->titulacion = $titulacion;

        return $this;
    }
}
