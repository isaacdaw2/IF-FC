<?php

namespace App\Controller;

use App\Entity\Usuarios;
use App\Entity\Jugadores;
use App\Entity\Socios;
use App\Entity\Entrenadores;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\String\Slugger\SluggerInterface;

class UsuariosController extends AbstractController
{
    /**
     * @Route("/misdatos", options={"expose"=true}, name="misdatos", methods={"GET"})
     */
    public function misDatos(Request $request)
    {
        if($request->isXmlHttpRequest()){
            $usuario = $this->getUser();

                $data = [
                    'id'=> $usuario->getId(),
                    'email' => $usuario->getEmail(),
                    'dni' => $usuario->getDni(),
                    'password' => $usuario->getPassword(),
                    'confirmPass' => $usuario->getConfirmPass(),
                    'nombre' => $usuario->getNombre(),
                    'apellidos' => $usuario->getApellidos(),
                    'fechaNacimiento' => $usuario->getfechaNacimiento(),
                    'calle' => $usuario->getcalle(),
                    'localidad' => $usuario->getLocalidad(),
                    'provincia' => $usuario->getProvincia(),
                    'cp' => $usuario->getCp()
                ];

            return new JsonResponse($data, Response::HTTP_OK);
        } else {
            throw new \Exception("No autorizado");
        }
    }

    /**
     * @Route("/editar-datos", options={"expose"=true}, name="editar-datos", methods={"PUT"})
     */
    public function editarDatos(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $jugador = $em->getRepository(Jugadores::class)->findOneBy(['usuarios' => $usuario]);
            $socio = $em->getRepository(Socios::class)->findOneBy(['usuarios' => $usuario]);
            
            // Modificación Usuario
            $nombre = $request->request->get('nombre');
            $apellidos = $request->request->get('apellidos');
            $fechaString = $request->request->get('fecha');
            $fechaDate = \DateTime::createFromFormat('Y-m-d', $fechaString);
            $email = $request->request->get('email');
            $pass = $request->request->get('pass');
            $confirmPass = $request->request->get('confirmPass');
            $dni = $request->request->get('dni');
            $calle = $request->request->get('calle');
            $localidad = $request->request->get('localidad');
            $provincia = $request->request->get('provincia');
            $cp = $request->request->get('cp');
            $usuario->setNombre($nombre);
            $usuario->setApellidos($apellidos);
            $usuario->setFechaNacimiento($fechaDate);
            $usuario->setEmail($email);
            if($pass != null){
                $usuario->setPassword($passwordEncoder->encodePassword($usuario, $pass));
            }
            $usuario->setDni($dni);
            $usuario->setCalle($calle);
            $usuario->setLocalidad($localidad);
            $usuario->setProvincia($provincia);
            $usuario->setCp($cp);

            // Modificación Jugador
            if($jugador) {
                $categoria = $request->request->get('categoria');
                $camiseta = $request->request->get('camiseta');
                $pantalon = $request->request->get('pantalon');
                $medias = $request->request->get('medias');
                $abrigo = $request->request->get('abrigo');
                $pagoJugador = $request->request->get('pagoJugador');
                $jugador->setCategoria($categoria);
                $jugador->setTallaCamiseta($camiseta);
                $jugador->setTallaPantalon($pantalon);
                $jugador->setTallaMedias($medias);
                $jugador->setTallaAbrigo($abrigo);
                $jugador->setMetodoPago($pagoJugador);

                $em->persist($usuario, $jugador);
            } 

            // Modificación Socio
            if($socio) {
                $pagoSocio = $request->request->get('pagoSocio');
                $socio->setMetodoPago($pagoSocio);

                $em->persist($usuario, $socio);
            }

            if($jugador && $socio){
                $em->persist($usuario, $jugador, $socio);
            } else {
                $em->persist($usuario);
            }            

            $em->flush();

            return new JsonResponse('Modificación realizada');
        } else {
            throw new \Exception("No autorizado");
        }
    }

    /**
     * @Route("/editar-entrenador", options={"expose"=true}, name="editar-entrenador", methods={"POST"})
     */
    public function editarEntrenador(Request $request, SluggerInterface $slugger)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $entrenador = $em->getRepository(Entrenadores::class)->findOneBy(['usuarios' => $usuario]);

            $titulos = $request->files->get('file');

            if ($titulos) {
                $originalFilename = pathinfo($titulos->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$titulos->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $titulos->move(
                        $this->getParameter('titulosEntrenador_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    throw new \Exception('Ha ocurrido un error');
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
            } 

            $entrenador->setTitulacion($newFilename);
            $em->persist($entrenador);      
            $em->flush();

            return new JsonResponse('Modificación realizada: titulo enviado');  
        } else {
            throw new \Exception("No autorizado");
        }      
    }

    /**
     * @Route("/usuarios/{id}", name="usuarios", options={"expose"=true})
     */
    public function usuariosId($id)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $usuario = $em->getRepository(Usuarios::class)->find($id);

            $data = [
                'id'=> $usuario->getId(),
                'email' => $usuario->getEmail(),
                'dni' => $usuario->getDni(),
                'password' => $usuario->getPassword(),
                'confirmPass' => $usuario->getConfirmPass(),
                'nombre' => $usuario->getNombre(),
                'apellidos' => $usuario->getApellidos(),
                'fechaNacimiento' => $usuario->getfechaNacimiento(),
                'calle' => $usuario->getcalle(),
                'localidad' => $usuario->getLocalidad(),
                'provincia' => $usuario->getProvincia(),
                'cp' => $usuario->getCp()
            ];

            return new JsonResponse($data, Response::HTTP_OK);
        } else {
            throw new \Exception("No autorizado");
        }
    }

    /**
     * @Route("/todos", name="todos", options={"expose"=true}, methods="GET")
     */
    public function todosUsuarios(Request $request)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $usuarios = $em->getRepository(Usuarios::class)->findAll();
    
            for ($i = 0; $i < count($usuarios); $i++) {
                
                $data[$i] = [
                    'id'=> $usuarios[$i]->getId(),
                    'email' => $usuarios[$i]->getEmail(),
                    'role' => $usuarios[$i]->getRoles(),
                    'dni' => $usuarios[$i]->getDni(),
                    'password' => $usuarios[$i]->getPassword(),
                    'confirmPass' => $usuarios[$i]->getConfirmPass(),
                    'nombre' => $usuarios[$i]->getNombre(),
                    'apellidos' => $usuarios[$i]->getApellidos(),
                    'fechaNacimiento' => $usuarios[$i]->getfechaNacimiento(),
                    'calle' => $usuarios[$i]->getcalle(),
                    'localidad' => $usuarios[$i]->getLocalidad(),
                    'provincia' => $usuarios[$i]->getProvincia(),
                    'cp' => $usuarios[$i]->getCp()
                ];
            }    
    
            return new JsonResponse($data, Response::HTTP_OK);
        } else {
            throw new \Exception("No autorizado");
        }
    }

    /**
     * @Route("/eliminar-usuario", options={"expose"=true}, name="eliminar-usuario")
     */
    public function eliminarUsuario(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            
            $em->remove($usuario);
            $em->flush();

            $this->get('security.token_storage')->setToken(null);
            $request->getSession()->invalidate();
            
            return new JsonResponse('Usuario borrado', Response::HTTP_OK);

        } else {
            throw new \Exception('Accesso negado');
        }
    }

    /**
     * @Route("/eliminar-socio", options={"expose"=true}, name="eliminar-socio")
     */
    public function eliminarSocio(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $id = $request->request->get('id');

            $socio = $em->getRepository(Socios::class)->find($id);

            if ($usuario == $socio->getUsuarios()) {
                $em->remove($socio);
                $em->flush();
                return new JsonResponse('Abono cancelado correctamente', Response::HTTP_OK);
            } else {
                return new JsonResponse('Algo salió mal', Response::HTTP_FORBIDDEN);
            }

        } else {
            throw new \Exception('Accesso negado');
        }
    }

    /**
     * @Route("/eliminar-jugador", options={"expose"=true}, name="eliminar-jugador")
     */
    public function eliminarJugador(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $id = $request->request->get('id');

            $jugador = $em->getRepository(Jugadores::class)->find($id);

            if ($usuario == $jugador->getUsuarios()) {
                $em->remove($jugador);
                $em->flush();
                return new JsonResponse('Baja del jugador realizada correctamente', Response::HTTP_OK);
            } else {
                return new JsonResponse('Algo salió mal', Response::HTTP_FORBIDDEN);
            }

        } else {
            throw new \Exception('Accesso negado');
        }
    }

    /**
     * @Route("/eliminar-entrenador", options={"expose"=true}, name="eliminar-entrenador")
     */
    public function eliminarEntrenador(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $id = $request->request->get('id');

            $entrenador = $em->getRepository(Entrenadores::class)->find($id);

            if ($usuario == $entrenador->getUsuarios()) {
                $em->remove($entrenador);
                $em->flush();
                return new JsonResponse('Baja del entrenador realizada correctamente', Response::HTTP_OK);
            } else {
                return new JsonResponse('Algo salió mal', Response::HTTP_FORBIDDEN);
            }

        } else {
            throw new \Exception('Accesso negado');
        }
    }
}
