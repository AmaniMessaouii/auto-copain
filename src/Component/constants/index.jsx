import pompe from "../../assets/pompe.svg";
import garage from "../../assets/garage.svg";
import panneEssences from "../../assets/panne-essence.svg";
import panneBatterie from "../../assets/panne-batterie.svg";
import roue from "../../assets/roue.svg";
import bricoleur from "../../assets/bricoleur.svg";
import ampoules from "../../assets/ampoules.svg";
import essuiesGlaces from "../../assets/essuies-glaces.svg";
import nettoyage from "../../assets/nettoyage.svg";
import image1 from '../../assets/phone0.png';
import image2 from '../../assets/phone1.png';
import image3 from '../../assets/phone2.png';
import avatar from "../../assets/avatarUser.png"
import avatarsub from "../../assets/dépanneurAvatar.svg"
import avatarsub0 from "../../assets/depanneurAvatar0.svg"
import service from '../../assets/serviceIcon.svg'
import whatsapp from '../../assets/whatsIcon.svg'
import website from '../../assets/websiteIcon.svg'
import facebook from '../../assets/facebookIcon.svg'
import instagram from '../../assets/InstagramIcon.svg'
import local1 from '../../assets/local1.svg'
import local2 from '../../assets/local2.svg'

const welcomeData = [
  {
      image: image1,
      title: "Bienvenue sur AutoCopain",
      description: "Demandez une assistance automobile rapide, N’IMPORTE OÙ, N’IMPORTE QUAND"
  },
  {
      image: image2,
      title: "Services Disponibles",
      description: "Nos services comprennent Panne d’essence, Panne de batterie, Roue crevée et bien plus encore !"
  },
  {
      image: image3,
      title: "Assistance en Un Clic",
      description: "Rejoignez notre communauté et restez serein sur la route."
  },
]
  const servicesData = [
    { image: pompe, title: 'Pompe à essence' },
    { image: garage, title: 'Garage' },
    { image: panneEssences, title: 'Panne d’essence' },
    { image: panneBatterie, title: 'Panne de batterie' },
    { image: roue, title: 'Roue crevée' },
    { image: bricoleur, title: 'Bricoleur' },
    { image: ampoules, title: 'Ampoules' },
    { image: essuiesGlaces, title: 'Essuies glaces' },
    { image: nettoyage, title: 'Nettoyage véhicule' },
];
const depanneurData = [
  {
      name: 'Marwen',
      subName: 'Peugeot',
      date: 'AA-OOO-AA',
      stars: 4.8,
      price: '30.00€',
      time: '30 mins',
      position: '10 km',
      avatar: avatar,
      avatarsub: avatarsub
  }
]
const userData = [
  {
      name: 'Marwen',
      date: 'AA-OOO-AA',
      stars: 4.8,
      price: '30.00€',
      time: '30 mins',
      position: '10 km',
      avatar: avatar,
      avatarsub: avatarsub

  },
  {
      name: 'Irfan',
      date: 'BB-OOO-KK',
      stars: 3,
      price: '30.00€',
      time: '1 H',
      position: '20 km',
      avatar: avatar,
      avatarsub: avatarsub0
  }
]
const faqData = [
  { question: 'A propos Autocopain', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { question: 'Quelles sont les méthodes de paiement acceptées ?', answer: 'We accept various payment methods including...' },
  { question: 'Puis-je annuler un signalement ?', answer: 'Yes, you can cancel a report by going to...' },
  { question: 'Comment puis-je désactiver les notifications ?', answer: 'To disable notifications, go to settings...' },
  { question: 'Comment puis-je supprimer mon compte ?', answer: 'To delete your account, follow these steps...' }
];
const ContactData = [
  { image: service, title: 'Service Clientèle' },
  { image: whatsapp, title: 'WhatsApp' },
  { image: website, title: 'Website' },
  { image: facebook, title: 'Facebook' },
  { image: instagram, title: 'Instagram' },
];
const localisationData = [
  { image: local1, title: 'Station Service Eni', local: '112 B Rue Léon Blum, 69100 Villeurbanne' },
  { image: local2, title: 'Veu fert', local: '355 Av. Général de Gaulle, 69500 Bron' },
];
  export {welcomeData, servicesData, depanneurData, userData, faqData, ContactData, localisationData};