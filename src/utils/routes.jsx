import React, { lazy } from 'react';

const Walkthrough = lazy(() => import('../Component/pages/Connecter/Walkthrough'));
const Login = lazy(() => import('../Component/pages/Connecter/Login'));
const ProfileType = lazy(() => import('../Component/pages/inscription/ProfileType'));
const InfoCompte = lazy(() => import('../Component/pages/inscription/InfoCompte'));
const CodeOtp = lazy(() => import('../Component/pages/inscription/CodeOtp'));
const VerifIdentite = lazy(() => import('../Component/pages/inscription/VerifIdentite'));
const InfoSupplementaires = lazy(() => import('../Component/pages/inscription/InfoSupplementaires'));
const Services = lazy(() => import('../Component/pages/inscription/Services'));
const ForgetPass = lazy(() => import('../Component/pages/forgetPassword/ForgetPass'));
const ConfirmOTP = lazy(() => import('../Component/pages/forgetPassword/ConfirmOTP'));
const NewPass = lazy(() => import('../Component/pages/forgetPassword/NewPass'));
const Patienter = lazy(() => import('../Component/pages/inscription/Patienter'));
const Camera = lazy(() => import('../Component/pages/inscription/Camera'));
const PhotoKpis = lazy(() => import('../Component/pages/inscription/PhotoKpis'));
const PanneList = lazy(() => import('../Component/pages/panne/PanneList'));
const DeclarePanne = lazy(() => import('../Component/pages/panne/DeclarePanne'));
const Confirmation = lazy(() => import('../Component/pages/panne/Confirmation'));
const Paiement = lazy(() => import('../Component/pages/paiement'));
const DepanneursDispo = lazy(() => import('../Component/pages/choisirDepanneur/DepanneursDispo'));
const DepanneursAcceptée = lazy(() => import('../Component/pages/choisirDepanneur/DepanneursAcceptée'));
const DetailDepanneur = lazy(() => import('../Component/pages/choisirDepanneur/DetailDepanneur'));
const MenuAuto = lazy(() => import('../Component/pages/automobilisteProfile/ProfileAuto'));
const EditProfile = lazy(() => import('../Component/pages/automobilisteProfile/EditProfile'));
const Pannes = lazy(() => import('../Component/pages/automobilisteProfile/Pannes'));
const Demandes = lazy(() => import('../Component/pages/automobilisteProfile/Demandes'));
const Intervention = lazy(() => import('../Component/pages/automobilisteProfile/Intervention'));
const AssistanceCenter = lazy(() => import('../Component/pages/automobilisteProfile/AssistanceCenter'));
const ServiceClient = lazy(() => import('../Component/pages/automobilisteProfile/ServiceClient'));
const AddRIB = lazy(() => import('../Component/pages/paiement/AddRIB'));
const ProfileDepanneur = lazy(() => import('../Component/pages/depanneurProfile/ProfileDepanneur'));
const InscriptionParticulier = lazy(() => import('../Component/pages/depanneurProfile/InscriptionParticulier'));
const Home = lazy(() => import('../Component/pages/localisation/Home'));


export const routes = [
    { path: "/", element: <Walkthrough /> },
    { path: "/login", element: <Login /> },
    { path: "/profile-type", element: <ProfileType /> },
    { path: "/info-compte", element: <InfoCompte /> },
    { path: "/OTP-code", element: <CodeOtp /> },
    { path: "/verif-identite", element: <VerifIdentite /> },
    { path: "/info-supplementaires", element: <InfoSupplementaires /> },
    { path: "/services", element: <Services /> },
    { path: "/forgot-pass", element: <ForgetPass /> },
    { path: "/confirm-OTP", element: <ConfirmOTP /> },
    { path: "/new-pass", element: <NewPass /> },
    { path: "/patienter", element: <Patienter /> },
    { path: "/camera", element: <Camera /> },
    { path: "/photo-kpis", element: <PhotoKpis /> },
    { path: "/panne-list", element: <PanneList /> },
    { path: "/declarer", element: <DeclarePanne /> },
    { path: "/confirmation", element: <Confirmation /> },
    { path: "/paiement", element: <Paiement /> },
    { path: "/depanneur-dispo", element: <DepanneursDispo /> },
    { path: "/depanneur-accepter", element: <DepanneursAcceptée /> },
    { path: "/detail-depanneur", element: <DetailDepanneur /> },
    { path: "/profil-auto", element: <MenuAuto /> },
    { path: "/edit-profil", element: <EditProfile /> },
    { path: "/panne", element: <Pannes /> },
    { path: "/demandes", element: <Demandes /> },
    { path: "/intervention", element: <Intervention /> },
    { path: "/centre-assistance", element: <AssistanceCenter /> },
    { path: "/service-client", element: <ServiceClient /> },
    { path: "/inscrit-particulier", element: <InscriptionParticulier /> },
    { path: "/add-rib", element: <AddRIB /> },
    { path: "/profile-depanneur", element: <ProfileDepanneur /> },
    { path: "/home", element: <Home /> },
];