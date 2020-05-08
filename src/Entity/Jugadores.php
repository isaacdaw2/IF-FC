<?php

namespace App\Entity;

use App\Repository\JugadoresRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=JugadoresRepository::class)
 */
class Jugadores
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Usuarios::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $usuarios;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $categoria;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $talla_camiseta;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $talla_pantalon;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $talla_medias;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $talla_abrigo;

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

    public function setUsuarios(Usuarios $usuarios): self
    {
        $this->usuarios = $usuarios;

        return $this;
    }

    public function getCategoria(): ?string
    {
        return $this->categoria;
    }

    public function setCategoria(string $categoria): self
    {
        $this->categoria = $categoria;

        return $this;
    }

    public function getTallaCamiseta(): ?string
    {
        return $this->talla_camiseta;
    }

    public function setTallaCamiseta(string $talla_camiseta): self
    {
        $this->talla_camiseta = $talla_camiseta;

        return $this;
    }

    public function getTallaPantalon(): ?string
    {
        return $this->talla_pantalon;
    }

    public function setTallaPantalon(string $talla_pantalon): self
    {
        $this->talla_pantalon = $talla_pantalon;

        return $this;
    }

    public function getTallaMedias(): ?string
    {
        return $this->talla_medias;
    }

    public function setTallaMedias(string $talla_medias): self
    {
        $this->talla_medias = $talla_medias;

        return $this;
    }

    public function getTallaAbrigo(): ?string
    {
        return $this->talla_abrigo;
    }

    public function setTallaAbrigo(string $talla_abrigo): self
    {
        $this->talla_abrigo = $talla_abrigo;

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
