<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:39
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEtudiantEduSignAdapter;
use App\Classes\EduSign\DTO\EduSignEtudiant;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;

class UpdateEtudiant
{
    public function __construct(
        private readonly ApiEduSign  $apiEduSign,
        protected DiplomeRepository  $diplomeRepository,
        protected SemestreRepository $semestreRepository,
        protected EtudiantRepository $etudiantRepository,
        protected EduSignEtudiant   $edusignEtudiant,
    )
    {
    }

    public function update(?string $keyEduSign): bool
    {
        if ($keyEduSign === null) {
            return false;
        } else {
            // on récupère les diplomes qui ont la clé EduSign
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
            foreach ($diplomes as $diplome) {
                $departement = $diplome->getDepartement();
            }
            $semestres = $this->semestreRepository->findSemestreEduSignDept($departement);
        }

        foreach ($semestres as $semestre) {
            $cleApi = $keyEduSign;
            $etudiants = $this->etudiantRepository->findBySemestre($semestre);

            foreach ($etudiants as $etudiant) {
                $groupes = [];
                $groupes[] = $etudiant->getSemestre()->getIdEduSign();
                foreach ($etudiant->getGroupes() as $groupe) {
                    $groupes[] = $groupe->getIdEduSign();
                }

                $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                if ($etudiant->getIdEduSign() === null) {
                    $this->apiEduSign->addEtudiant($etudiantEduSign, $cleApi);
                } else {
                    $edusignEtudiants = $this->apiEduSign->getAllEtudiants($cleApi);

                    // comparer les étudiants récupérés depuis edusign et ceux de la base de données
                    foreach ($edusignEtudiants as $edusignEtudiant) {
                        $edusignEtudiant = $this->apiEduSign->getEtudiant($edusignEtudiant['ID'], $cleApi);
                        if ($edusignEtudiant['ID'] === $etudiant->getIdEduSign()) {
                            if ($groupes === null) {
                                $this->apiEduSign->deleteEtudiant($etudiant->getIdEduSign(), $cleApi);
                            }
                            // si les les groupes des étudiants ne sont pas les mêmes dans edusign et dans la base de données, on ajoute le groupe manquant dans edusign
                            $this->apiEduSign->updateEtudiant($etudiantEduSign, $cleApi);
                        }
                    }
                }
            }
        }
        return true;
    }

    public function changeSemestre(?string $keyEduSign)
    {
        if ($keyEduSign === null) {
            return false;
        } else {
            // on récupère les diplomes qui ont la clé EduSign
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
            foreach ($diplomes as $diplome) {
                $departement = $diplome->getDepartement();
            }
            $semestres = $this->semestreRepository->findSemestreEduSignDept($departement);
        }

        foreach ($semestres as $semestre) {
            $cleApi = $keyEduSign;
            $etudiants = $this->etudiantRepository->findBySemestre($semestre);

            foreach ($etudiants as $etudiant) {
                $groupes = [];
                $groupes[] = $etudiant->getSemestre()->getIdEduSign();
                foreach ($etudiant->getGroupes() as $groupe) {
                    $groupes[] = $groupe->getIdEduSign();
                }

                if ($etudiant->getIdEduSign() !== null) {

                    $edusignEtudiant = $this->apiEduSign->getEtudiant($etudiant->getIdEduSign(), $cleApi);
                    if ($edusignEtudiant['ID'] === $etudiant->getIdEduSign()) {

                        $groupes = array_merge($groupes, $edusignEtudiant['GROUPS']);
                        $groupes = array_unique($groupes);
                        // retirer les entrées égales à null
                        $groupes = array_filter($groupes, function ($value) {
                            return $value !== null;
                        });
                        $groupes = array_values($groupes);

                        $this->edusignEtudiant->id = $etudiant->getIdEduSign();
                        $this->edusignEtudiant->firstname = $etudiant->getPrenom();
                        $this->edusignEtudiant->lastname = $etudiant->getNom();
                        $this->edusignEtudiant->email = $etudiant->getMailUniv();
                        $this->edusignEtudiant->api_id = $etudiant->getId();
                        $this->edusignEtudiant->groups = $groupes;

                        $this->apiEduSign->updateEtudiant($this->edusignEtudiant, $cleApi);
                    }
                }
            }
        }
        return true;
    }
}
