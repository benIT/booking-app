<?php

namespace App\Controller;

use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(ServiceRepository $serviceRepository)
    {

        $services = $serviceRepository->findFromDate((new \DateTime())->setTime(0, 0));

//        $serializer->serialize($services[0], 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ['slots']]);
//
//
//        $jsonContent = $serializer->serialize($services, 'json');
//        dd($jsonContent);
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'services' => $services,
        ]);
    }

    /**
     * @Route("/service/ajax", name="app_service_ajax")
     */
    public function serviceAjax(ServiceRepository $serviceRepository)
    {
        $services = $serviceRepository->findFromDate((new \DateTime())->setTime(0, 0));

        $normalizer = new ObjectNormalizer();
        $encoder = new JsonEncoder();
        $serializer = new Serializer([$normalizer], [$encoder]);

        $jsonContent = $serializer->serialize($services[0], 'json',[AbstractNormalizer::IGNORED_ATTRIBUTES => ['slots']]);

        return new Response();
    }
}
