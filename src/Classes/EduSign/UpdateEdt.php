<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 14:42
 */

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EvenementEdt;
use App\Repository\ApcReferentielRepository;
use App\Repository\DepartementRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;
use function PHPUnit\Framework\isEmpty;

class UpdateEdt
{

    private $evenement;
    private UpdateManager $updateManager;

    public function __construct(
        private readonly ApiEduSign         $apiEduSign,
        private readonly EdtManager         $edtManager,
        private readonly TypeMatiereManager $typeMatiereManager,
        protected SemestreRepository        $semestreRepository,
        protected PersonnelRepository       $personnelRepository,
        protected UpdateEnseignant          $updateEnseignant,
        protected DepartementRepository     $departementRepository,
        private EventDispatcherInterface    $eventDispatcher,
        protected ApcReferentielRepository  $apcReferentielRepository,
    )
    {
        $eventDispatcher->addListener(EnseignantUpdatedEvent::class, [$this, 'onEnseignantUpdated']);
    }

    public function onEnseignantUpdated(EnseignantUpdatedEvent $event)
    {
        $this->sendUpdate();
    }

    public function update()
    {
        //todo: pour chaque dept
        $departements = $this->departementRepository->findActifs();
        $semestres = [];
        foreach ($departements as $departement) {
            $semestreArrays = $this->semestreRepository->findByDepartementActif($departement);
            foreach ($semestreArrays as $semestreArray) {
                $semestres[] = $semestreArray;
            }
        }

        foreach ($semestres as $semestre) {
            // récupérer la date d'aujourd'hui
            $today = new Carbon('now');
            // récupérer le prochain samedi
            $saturday = new Carbon('next saturday');

            $semaine = 6;

            $referentiel = $this->apcReferentielRepository->findOneBy(['id' => $semestre->getDiplome()->getReferentiel()]);

            if ($referentiel !== null) {

                $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestreArray($semestre, $referentiel);

            }

            //récupère les edt de l'intranet depuis EdtManager.php
            $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieres, []);

            foreach ($edt->evenements as $evenement) {

//                $evenementJour = \DateTime::createFromFormat('Y-m-d H:i:s', $evenement->heureDebut, new \DateTimeZone('Europe/Paris'));

                dump('------------');
//                dump($evenement->personnelObjet);
//                dump($evenement->dateObjet);
//                dump($semestre->getAnneeUniversitaire());
//                die();

                if ($evenement->dateObjet->isBetween($today, $saturday)) {
                    dump('ok');
//                    die();
                    $this->evenement = $evenement;

                    $enseignant = $evenement->personnelObjet;

                    // Retourner l'id du personnel pour le mettre à jour
//                    $id = $enseignant->getId();

                    if ($enseignant) {
                            dump($enseignant->getIdEduSign());
                        if ($enseignant->getIdEduSign() == '' || $enseignant->getIdEduSign() == null) {
//                            $this->eventDispatcher->dispatch(new EnseignantAddedEvent($id));
                        } else {
                            $this->sendUpdate();
                        }
                    }
                } else {
                    dump('evenement hors d\'échéance');
                }
            }
        }
    }

    public function sendUpdate()
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        $this->apiEduSign->addCourse($course);
    }
}
