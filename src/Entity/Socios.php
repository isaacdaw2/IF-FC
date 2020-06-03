<?php

namespace App\Entity;

use App\Repository\SociosRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SociosRepository::class)
 */
class Socios
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Usuarios::class, cascade={"persist"})
     * @ORM\JoinColumn(name="usuarios_id", nullable=false, onDelete="CASCADE")
     */
    private $usuarios;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $metodo_pago;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsuarios(): ?Usuarios
    {
        return $this->usuarios;
    }

    public function setUsuarios(?Usuarios $usuarios): self
    {
        $this->usuarios = $usuarios;

        return $this;
    }

    public function getMetodoPago(): ?string
    {
        return $this->metodo_pago;
    }

    public function setMetodoPago(string $metodo_pago): self
    {
        $this->metodo_pago = $metodo_pago;

        return $this;
    }
}
