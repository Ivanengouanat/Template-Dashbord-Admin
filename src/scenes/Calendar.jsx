import { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import Headers from "../components/Headers";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      //Utilise l'objet Intl.DateTimeFormat pour formater la date selon les conventions américaines ('en-US').
      year: "numeric", // Spécifie le format de la date : année en chiffres, mois abrégé et jour en chiffres.
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const handleDateClick = (selected) => {
    const title = prompt("please enetr your new title for your event");
    const calendarApi = selected.view.calendar; // Accède à l'API du calendrier à partir de l'objet selected.
    calendarApi.unselect(); // Désélectionne la date actuellement sélectionnée dans le calendrier.

    if (title) {
      // Si l'utilisateur a saisi un titre, exécute le bloc de code à l'intérieur des accolades.
      calendarApi.addEvent({
        // Ajoute un nouvel événement au calendrier avec les détails suivants :
        id: `${selected.dateStr}-${title}`, // Utilise la date sélectionnée et le titre pour créer un identifiant unique pour l'événement.
        title, // Utilise le titre saisi par l'utilisateur
        start: selected.startStr, //Définit l'heure de début de l'événement.
        end: selected.endStr, // Définit l'heure de fin de l'événement.
        allDay: selected.allday, // Indique si l'événement dure toute la journée.
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the Event'${selected.event.title}'`
      )
    ) {
      // Utilise la méthode window.confirm() pour afficher une boîte de dialogue de confirmation.
      // Le message dans la boîte de dialogue inclut le titre de l'événement sélectionné (selected.event.title) pour que l'utilisateur sache quel événement il est sur le point de supprimer
      // Si l'utilisateur clique sur "OK", la méthode window.confirm() retourne true et le bloc de code à l'intérieur des accolades { ... } est exécuté. Si l'utilisateur clique sur "Annuler", le bloc de code n'est pas exécuté.
      selected.event.remove(); // Si l'utilisateur confirme la suppression, la méthode remove() est appelée sur l'événement sélectionné (selected.event). Cela supprime l'événement du calendrier.
    }
  };

  return (
    <Box margin="5px">
      <Headers title="Calendar" subtitle="watch your event" />

      <Box display="flex" justifyContent="space-between">
        {/*Calendar sidebar */}

        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[900]}
          p="5px"
          borderRaduis="4px" /*flex='1 1 20%' signifie que cet élément peut se dilater et se contracter, occupant 20% de l'espace disponible.

              */
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start)}{" "}
                      {/*
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                */}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box
          flex="1 1 100%"
          ml="5px" //Box : Utilise le composant Box de Material-UI pour créer un conteneur flexible.
          // flex='1 1 100%' : Définit le modèle de flexbox avec flex-grow, flex-shrink, et flex-basis. Ici, l'élément prend toute la largeur disponible.
        >
          <Fullcalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            //  dayGridPlugin : Pour la vue en grille quotidienne (mensuelle).
            //    timeGridPlugin : Pour la vue en grille horaire (hebdomadaire et quotidienne).
            //  interactionPlugin : Pour permettre les interactions, comme sélectionner des dates et déplacer des événements.
            //  listPlugin : Pour la vue en liste des événements.
            headerToolbar={{
              left: "prev, next today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
            }}
            //left : Boutons situés à gauche (prev, next, today).
            //  center : Titre du calendrier situé au centre.
            // right : Boutons situés à droite (dayGridMonth, timeGridWeek, timeGridDay, listMonth).

            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "all day event", date: "2024-09-04" },
              { id: "4321", title: "timed event", date: "2024-09-24" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
