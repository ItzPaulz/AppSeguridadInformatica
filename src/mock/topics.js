export const topics = [
  {
    id: 1,
    title: "Contraseñas Fuertes",
    description:
      "Aprende a crear contraseñas que nadie pueda adivinar. Para crear una Contraseña fuerte, usa al menos 8 caracteres, combina letras mayúsculas y minúsculas, números y símbolos especiales.",
    ageGroup: [ "niños", "jovenes", "adultos"], // <-- Asegúrate de incluir "niños" aquí para que el juego se muestre en todos los grupos
    // ...si usas activity para el juego, agrega aquí:
    // activity: MiniGamePassword, // si tienes el componente importado y quieres que se muestre para todos los grupos
  },
  {
    id: 2,
    title: "Phishing: ¡No Caigas!",
    description:
      "Phishing es una técnica de fraude digital en la que los atacantes se hacen pasar por personas, empresas o instituciones confiables a través de correos electrónicos, mensajes de texto o sitios web falsos. Su objetivo es engañarte para que reveles información personal como contraseñas, números de tarjetas o datos bancarios. Estos mensajes suelen parecer legítimos, pero pueden contener errores sutiles o enlaces que te llevan a sitios web falsos. También pueden incluir amenazas o urgencias para presionarte a actuar rápidamente sin pensar.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/UuuAlP7ay6U",
  },
  {
    id: 3,
    title: "Privacidad en Redes Sociales",
    description:
      "Configura tu privacidad para compartir solo lo que quieres, ten cuidado que compartes y donde lo compartes, ya que hay personas maliciosas que pueden ocupar tu información para realizar una suplantación de identidad o cualquier cosa mala.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/CXmjnNoDrTI",
  },
  {
    id: 4,
    title: "Cuidado con los Desconocidos Online",
    description:
      "No confíes en extraños en internet, ¡protégete!, , no confies ni des información muy personal o privada a desconocidos, vamos a Jugar y probemos que tanto sabes sobre no dar información a desconocidos!",
    ageGroup: ["jovenes"],
  },
  {
    id: 5,
    title: "Actualizaciones de Software",
    description:
      "Mantén tus programas al día para evitar vulnerabilidades. Si los prgramas que usas en tu celular, no estan actualizados, puedes estar vulnerable antes ataques cibernéticos, por eso es importante que siempre tengas tus aplicaciones actualizadas.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/Dmgzt5xrRpM",
    graphic: "software-update-graphic",
  },
  {
    id: 6,
    title: "Wi-Fi Público Seguro",
    description: "Consejos para usar redes Wi-Fi públicas sin riesgos.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/QityaRFbly8",
  },
  {
    id: 7,
    title: "Backup de Información",
    description: "Guarda tus archivos importantes para no perderlos.",
    ageGroup: ["jovenes"],
    videoUrl: "https://www.youtube.com/embed/0OA8ZM6qofg",
    animation: "backup-animation",
    graphic: "backup-graphic",
  },
  {
    id: 8,
    title: "Fraudes Online",
    description: "Aprende a identificar estafas en línea y cómo evitarlas.",
    ageGroup: ["adultos"],
    videoUrl: "https://www.youtube.com/embed/qEXWo1_BapA",
    animation: "online-fraud-animation",
    graphic: "online-fraud-graphic",
  },
  {
    id: 9,
    title: "Ingeniería Social",
    description:
      "Entiende cómo los atacantes manipulan para obtener información. Hay que tener mucho cuidado con la información que compartimos, ya que los atacantes pueden usar técnicas de ingeniería social para manipular a las personas y obtener información sensible. Esto puede incluir correos electrónicos falsos, llamadas telefónicas engañosas o mensajes en redes sociales.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/UTy7JR2Z9qY",
    animation: "social-engineering-animation",
    graphic: "social-engineering-graphic",
  },
  {
    id: 10,
    title: "Autenticación de Dos Factores",
    description:
      "Añade una capa extra de seguridad a tus cuentas. Tener una autenticación de dos pasos es importante ya que esto fortalece la seguridad en nuestras respectivas cuentas.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/yQnXTQ_GYzg",
    animation: "2fa-animation",
    graphic: "2fa-graphic",
  },
  {
    id: 11,
    title: "Ciberacoso",
    description:
      "Qué hacer si eres víctima de acoso en línea, que acciones debes tomar en cuenta",
    ageGroup: ["jovenes"],
  },
  {
    id: 12,
    title: "Contenido Inapropiado",
    description: "Cómo identificar y reportar contenido dañino en internet.",
    ageGroup: [, "jovenes"],
  },
  {
    id: 13,
    title: "Compras Seguras Online",
    description: "Consejos para comprar en línea sin riesgos.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/hoTIVnSGVqA",
  },
  {
    id: 14,
    title: "Dispositivos IoT Seguros",
    description: "Protege tus dispositivos inteligentes conectados a internet.",
    ageGroup: ["jovenes"],
    videoUrl: "https://www.youtube.com/embed/04EdezH7BZM",
    animation: "iot-security-animation",
    graphic: "iot-security-graphic",
  },
  {
    id: 15,
    title: "Ransomware",
    description:
      "Qué es y cómo protegerte de este tipo de ataque. Este Es un virus que entra en tu computadora y bloquea tus archivos o todo el sistema. Luego te piden dinero (un 'rescate') para recuperar el acceso. Es como si te pusieran un candado digital y te pidieran pagar para darte la llave. Para protegerte, lo mejor es tener tu antivirus actualizado y hacer copias de tus archivos importantes.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/NavnyirfwC8",
  },
  {
    id: 16,
    title: "Smishing y Vishing",
    description:
      "Fraudes por SMS y llamadas telefónicas. Smishing y vishing son formas de engaño en las que los delincuentes intentan robar tu información personal: el smishing lo hace mediante mensajes de texto falsos, y el vishing a través de llamadas telefónicas que simulan ser de entidades confiables.",
    ageGroup: ["adultos"],
    videoUrl: "https://www.youtube.com/embed/t6k24MQFCsw",
    videoUrl1: "https://www.youtube.com/embed/a3hn1jfa29w",
  },
  {
    id: 17,
    title: "Uso Responsable de la Tecnología",
    description: "Equilibrio entre el mundo digital y la vida real.",
    ageGroup: ["jovenes"],
    videoUrl: "https://www.youtube.com/embed/fxaMDQxLLx0",
    animation: "responsible-tech-animation",
    graphic: "responsible-tech-graphic",
  },
  {
    id: 18,
    title: "Configuración de Privacidad en Apps",
    description:
      "Revisa los permisos que das a tus aplicaciones. Miremos este video que nos instruye y nos recomienda como configurar nuestro celular android para que sea más seguro.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/uZ7oRwH3Hjg",
    animation: "app-privacy-animation",
    graphic: "app-privacy-graphic",
  },
  {
    id: 19,
    title: "Seguridad en Videojuegos",
    description: "Juega seguro y protege tu información en línea.",
    ageGroup: ["jovenes"],

  },
  {
    id: 20,
    title: "Robo de Identidad",
    description:
      "Cómo proteger tu identidad en el mundo digital. El robo de identidad es cuando una persona usa tu información personal, como tu nombre, número de cédula, cuentas bancarias o contraseñas, sin tu permiso, haciéndose pasar por ti. Lo hacen para abrir cuentas, hacer compras, pedir préstamos o cometer otros fraudes a tu nombre. Es como si alguien se pusiera una máscara con tu cara para aprovecharse de lo que tú tienes. Por eso, es muy importante cuidar bien tus datos, no compartirlos con desconocidos y tener cuidado con llamadas, mensajes o correos sospechosos.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/o65U3xTR3rc",
  },
  {
    id: 21,
    title: "Malware y Virus",
    description: "Qué son y cómo evitar que infecten tus dispositivos.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/HuasitV4lcw",
    animation: "malware-virus-animation",
    graphic: "malware-virus-graphic",
  },
  {
    id: 22,
    title: "Uso Seguro del Correo Electrónico",
    description: "Consejos para un correo electrónico seguro.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/7HjDyI4SCvA",
  },
  {
    id: 23,
    title: "Navegación Segura",
    description:
      "Identifica sitios web seguros y evita los peligrosos. Navegar por internet de forma segura significa usar el computador o el celular sin correr riesgos ni caer en engaños. Para hacerlo, es importante visitar solo páginas confiables las que empiezan con https no hacer clic en enlaces sospechosos ni descargar cosas de fuentes desconocidas. También se debe tener un buen antivirus, mantener el sistema actualizado y usar contraseñas seguras. Además, nunca se deben compartir datos personales en sitios que no sean oficiales. Así, puedes disfrutar de internet sin poner en peligro tu información ni tu equipo.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/gOgHPSphMPE",
    animation: "safe-browsing-animation",
    graphic: "safe-browsing-graphic",
  },
  {
    id: 24,
    title: "Gestores de Contraseñas",
    description:
      "Usa herramientas para recordar tus contraseñas de forma segura.",
    ageGroup: ["jovenes", "adultos"],
    animation: "password-manager-animation",
    graphic: "password-manager-graphic",
  },
  {
    id: 25,
    title: "Reconocer y evitar fraudes con tarjetas bancarias y pagos en línea",
    description:
      "Este tema les enseña a identificar intentos de fraude relacionados con el uso de tarjetas de crédito o débito, cómo revisar sus movimientos bancarios, no compartir datos de la tarjeta por teléfono o internet, y usar métodos de pago seguros para proteger su dinero.",
    ageGroup: ["adultos"],
    videoUrl: "https://www.youtube.com/embed/kDO9ILuSRlk",
  },
  {
    id: 26,
    title: "Educación Digital para Padres",
    description: "Guía para padres sobre la seguridad de sus hijos en línea.",
    ageGroup: ["adultos"],
    videoUrl: "https://www.youtube.com/embed/x94vCNcsxgs",
  },
  {
    id: 27,
    title: "Reportar Incidentes de Ciberseguridad",
    description: "Aprende a quién acudir si sufres un ataque.",
    ageGroup: ["adultos"],
    videoUrl: "https://www.youtube.com/embed/v4y8C4QAD0",
  },
  {
    id: 28,
    title: "Deepfakes y Desinformación",
    description: "Cómo identificar contenido falso generado por IA.",
    ageGroup: ["jovenes", "adultos"],
    videoUrl: "https://www.youtube.com/embed/kJJ0lofFMLk",
    animation: "deepfake-animation",
    graphic: "deepfake-graphic",
  },
  {
    id: 29,
    title: "Seguridad en la Nube",
    description: "Protege tus datos almacenados en servicios en la nube.",
    ageGroup: ["jovenes"],
    animation: "cloud-security-animation",
    graphic: "cloud-security-graphic",
  },
  {
    id: 30,
    title: "NETiqueta y Comportamiento Online",
    description: "Reglas de buena conducta en el mundo digital.",
    ageGroup: ["jovenes"],
    videoUrl: "https://www.youtube.com/embed/s_J4-2e2222",
    animation: "netiquette-animation",
    graphic: "netiquette-graphic",
  },
    {
      //Video
    id: 31,
    title: "Que es la cyberseguridad",
    description: "Descubre cómo proteger tu computadora y tus datos personales cuando usas internet.",
    ageGroup: ["niños"],
    videoUrl: "https://www.youtube.com/watch?v=B8ARf_2WLw0",
  },
  {
    //Infografia
    id: 33,
    title: "Importancia de pedir ayuda",
    description: "Aprende por qué es importante contarle a un adulto cuando algo en internet te hace sentir incómodo o confundido.",
    ageGroup: ["niños"],
    graphic: require("../infografias/InfografiaAyuda.png"),
  },
    {
      //Codigo
    id: 34,
    title: "Informacion Personal Privada",
    description: "Entiende qué datos no debes compartir en internet, como tu dirección, número de teléfono o escuela.",
    ageGroup: ["niños"],
    activity: function PersonalInfoActivity() {
      // Versión web del juego interactivo
      const React = require('react');
      const { useState } = React;

      const items = [
        { id: 1, text: 'Tu nombre completo', isPrivate: true },
        { id: 2, text: 'Tu color favorito', isPrivate: false },
        { id: 3, text: 'Tu dirección de casa', isPrivate: true },
        { id: 4, text: 'Tu mascota favorita', isPrivate: false },
        { id: 5, text: 'Nombre de tu escuela', isPrivate: true },
        { id: 6, text: 'Tu número de teléfono', isPrivate: true },
        { id: 7, text: 'Tu comida favorita', isPrivate: false },
        { id: 8, text: 'Fotos de tu casa', isPrivate: true },
      ];

      const [selectedItems, setSelectedItems] = useState([]);
      const [message, setMessage] = useState("");

      const toggleItem = (itemId) => {
        setSelectedItems(prev =>
          prev.includes(itemId)
            ? prev.filter(id => id !== itemId)
            : [...prev, itemId]
        );
      };

      const checkAnswers = () => {
        const privateItems = items.filter(item => item.isPrivate).map(item => item.id);
        const correctAnswers = selectedItems.filter(id => privateItems.includes(id)).length;
        const incorrectAnswers = selectedItems.filter(id => !privateItems.includes(id)).length;

        let msg = '';
        if (correctAnswers === privateItems.length && incorrectAnswers === 0) {
          msg = '¡Excelente! 🎉 Identificaste correctamente toda la información privada.';
        } else if (correctAnswers > incorrectAnswers) {
          msg = '¡Muy bien! 👍 Pero recuerda: nunca compartas información personal en internet.';
        } else {
          msg = '¡Sigue practicando! 🤔 Recuerda que tu información personal debe mantenerse privada.';
        }
        setMessage(msg);
      };

      return React.createElement('div', { className: "p-6 bg-green-50 rounded-xl shadow-md text-center border border-green-200" },
        React.createElement('h3', { className: "text-xl font-bold text-green-800 mb-4" }, "¿Qué información NO debes compartir en internet?"),
        React.createElement('p', { className: "text-green-700 mb-4" }, "Selecciona los elementos que deben mantenerse privados:"),
        items.map(item =>
          React.createElement('button', {
            key: item.id,
            onClick: () => toggleItem(item.id),
            className:
              "block w-full text-left px-4 py-2 mb-2 rounded-lg border transition-colors " +
              (selectedItems.includes(item.id)
                ? "bg-green-200 border-green-500 font-bold"
                : "bg-white border-gray-300 hover:bg-green-100")
          }, item.text)
        ),
        React.createElement('button', {
          onClick: checkAnswers,
          className: "mt-4 py-2 px-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
        }, "Verificar Respuestas"),
        message && React.createElement('p', { className: "mt-4 text-green-800 font-semibold" }, message)
      );
    },
  },
  {
      //Codigo
    id: 35,
    title: "Tiempo en Pantalla Saludable",
    description: "Conoce por qué es bueno tener un equilibrio entre el tiempo frente a las pantallas y otras actividades divertidas.",
    ageGroup: ["niños"],
    activity: function ScreenTimeActivity() {
      const React = require('react');
      const { useState } = React;

      const timeSlots = [
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
        '7:00 PM', '8:00 PM', '9:00 PM'
      ];

      const activityOptions = [
        { id: 'screen', name: 'Tiempo de Pantalla', icon: '📱', isScreen: true },
        { id: 'exercise', name: 'Ejercicio', icon: '🏃‍♂', isScreen: false },
        { id: 'homework', name: 'Tareas', icon: '📚', isScreen: false },
        { id: 'play', name: 'Jugar Afuera', icon: '⚽', isScreen: false },
        { id: 'family', name: 'Tiempo Familiar', icon: '👨‍👩‍👧‍👦', isScreen: false },
        { id: 'sleep', name: 'Dormir', icon: '😴', isScreen: false },
      ];

      const [currentTime, setCurrentTime] = useState(0);
      const [activities, setActivities] = useState([]);
      const [showSchedule, setShowSchedule] = useState(false);
      const [message, setMessage] = useState("");

      const addActivity = (activity) => {
        const newActivity = {
          time: timeSlots[currentTime],
          activity: activity,
          id: Date.now() + Math.random()
        };
        const updated = [...activities, newActivity];
        setActivities(updated);

        if (currentTime < timeSlots.length - 1) {
          setCurrentTime(currentTime + 1);
        } else {
          analyzeSchedule(updated);
        }
      };

      const analyzeSchedule = (schedule) => {
        const screenTime = schedule.filter(activity =>
          activityOptions.find(option => option.id === activity.activity.id)?.isScreen
        ).length;

        const totalActivities = schedule.length;
        const screenPercentage = (screenTime / totalActivities) * 100;

        let msg = '';
        if (screenPercentage <= 30) {
          msg = '¡Excelente balance! 🌟 Tienes un uso saludable de la tecnología.';
        } else if (screenPercentage <= 50) {
          msg = '¡Buen trabajo! 👍 Pero podrías agregar más actividades sin pantalla.';
        } else {
          msg = '¡Cuidado! 📱 Demasiado tiempo de pantalla. Intenta más actividades offline.';
        }

        setMessage(msg);
        setShowSchedule(true);
      };

      const resetSchedule = () => {
        setCurrentTime(0);
        setActivities([]);
        setShowSchedule(false);
        setMessage("");
      };

      if (showSchedule) {
        return React.createElement('div', { className: "p-6 bg-blue-50 rounded-xl shadow-md text-center border border-blue-200" },
          React.createElement('h3', { className: "text-xl font-bold text-blue-800 mb-4" }, "Tu Horario Diario"),
          activities.map((item) =>
            React.createElement('div', { key: item.id, className: "flex items-center bg-white p-3 rounded-lg mb-2 border-l-4 border-blue-400" },
              React.createElement('span', { className: "font-bold text-blue-700 w-28" }, item.time),
              React.createElement('span', { className: "ml-2 text-lg" }, item.activity.icon + " " + item.activity.name)
            )
          ),
          React.createElement('p', { className: "mt-4 text-blue-800 font-semibold" }, message),
          React.createElement('button', {
            className: "mt-6 py-2 px-6 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors",
            onClick: resetSchedule
          }, "Crear Nuevo Horario")
        );
      }

      return React.createElement('div', { className: "p-6 bg-blue-50 rounded-xl shadow-md text-center border border-blue-200" },
        React.createElement('h3', { className: "text-xl font-bold text-blue-800 mb-4" }, "Crea tu Horario Saludable"),
        React.createElement('p', { className: "text-blue-700 mb-4" }, `Hora: ${timeSlots[currentTime]} - ¿Qué actividad eliges?`),
        React.createElement('div', { className: "flex flex-wrap justify-center gap-3 mb-4" },
          activityOptions.map(activity =>
            React.createElement('button', {
              key: activity.id,
              className: "bg-white px-4 py-3 rounded-lg border text-lg flex flex-col items-center w-36 hover:bg-blue-100 transition-colors",
              onClick: () => addActivity(activity)
            },
              React.createElement('span', { className: "text-2xl mb-1" }, activity.icon),
              React.createElement('span', null, activity.name)
            )
          )
        ),
        React.createElement('p', { className: "mt-2 text-blue-600" }, `Progreso: ${currentTime + 1}/${timeSlots.length}`)
      );
    },
  },
    {
    id: 36,
    title: "Cuidado con los Desconocidos Online",
    description: "No confíes en extraños en internet",
    ageGroup: ["niños"],
    activity: function StrangersActivity() {
      const React = require('react');
      const { useState } = React;

      const scenarios = [
        {
          situation: 'Mientras juegas online, alguien te pregunta: "¿En qué escuela estudias?"',
          options: [
            { text: 'Le digo el nombre de mi escuela', correct: false },
            { text: 'No respondo y le cuento a mis padres', correct: true },
            { text: 'Le miento y le digo una escuela falsa', correct: false }
          ]
        },
        {
          situation: 'Un extraño te dice: "Eres muy bueno jugando, ¿quieres ser mi amigo? Mándame tu foto"',
          options: [
            { text: 'Le envío una foto mía', correct: false },
            { text: 'No envío nada y bloqueo a la persona', correct: true },
            { text: 'Le envío una foto de mi mascota', correct: false }
          ]
        },
        {
          situation: 'Alguien te ofrece: "Te regalo monedas del juego si me das tu dirección"',
          options: [
            { text: 'Acepto porque me gustan los regalos', correct: false },
            { text: 'Rechazo la oferta y reporto a la persona', correct: true },
            { text: 'Pido primero las monedas y después decido', correct: false }
          ]
        }
      ];

      const [currentScenario, setCurrentScenario] = useState(0);
      const [score, setScore] = useState(0);
      const [showResult, setShowResult] = useState(false);

      const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);

        if (currentScenario < scenarios.length - 1) {
          setCurrentScenario(currentScenario + 1);
        } else {
          setShowResult(true);
        }
      };

      const resetGame = () => {
        setCurrentScenario(0);
        setScore(0);
        setShowResult(false);
      };

      if (showResult) {
        return React.createElement('div', { className: "p-6 bg-yellow-50 rounded-xl shadow-md text-center border border-yellow-200" },
          React.createElement('h3', { className: "text-xl font-bold text-yellow-800 mb-4" }, "¡Actividad Completada!"),
          React.createElement('div', { className: "text-2xl font-bold text-green-700 mb-2" }, `Tu puntuación: ${score}/${scenarios.length}`),
          React.createElement('div', { className: "mb-4 text-lg" },
            score === scenarios.length
              ? '¡Perfecto! 🛡 Sabes cómo mantenerte seguro online.'
              : score >= 2
                ? '¡Muy bien! 👍 Recuerda siempre desconfiar de extraños.'
                : '¡Sigue practicando! 🤔 Nunca confíes en extraños online.'
          ),
          React.createElement('button', {
            className: "mt-4 py-2 px-6 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors",
            onClick: resetGame
          }, "Jugar de Nuevo")
        );
      }

      return React.createElement('div', { className: "p-6 bg-yellow-50 rounded-xl shadow-md text-center border border-yellow-200" },
        React.createElement('h3', { className: "text-xl font-bold text-yellow-800 mb-4" }, `Situación ${currentScenario + 1}/${scenarios.length}`),
        React.createElement('div', { className: "mb-4 text-lg bg-white rounded-lg p-4" }, scenarios[currentScenario].situation),
        React.createElement('div', { className: "mb-2 text-gray-700" }, "¿Qué harías?"),
        scenarios[currentScenario].options.map((option, idx) =>
          React.createElement('button', {
            key: idx,
            className: "block w-full mb-2 py-2 px-4 rounded-lg border bg-white hover:bg-yellow-100 transition-colors",
            onClick: () => handleAnswer(option.correct)
          }, option.text)
        )
      );
    },
  },
    {
    id: 37,
    title: "Contenido Inapropiado",
    description: "Cómo identificar y reportar contenido dañino en internet.",
    ageGroup: ["niños"],
    activity: function SafeContentGame() {
      const React = require('react');
      const { useState, useEffect } = React;

      const gameItems = [
        {
          id: 1,
          text: "📚 Libro de cuentos para niños",
          isAppropriate: true,
          category: "Educativo",
          explanation: "¡Perfecto! Los libros educativos son excelentes para aprender."
        },
        {
          id: 2,
          text: "🎮 Videojuego con violencia extrema",
          isAppropriate: false,
          category: "Entretenimiento",
          explanation: "Este tipo de juegos no son apropiados para tu edad. Mejor busca juegos educativos."
        },
        {
          id: 3,
          text: "🎵 Canción infantil divertida",
          isAppropriate: true,
          category: "Música",
          explanation: "¡Genial! La música infantil es perfecta para divertirse sanamente."
        },
        {
          id: 4,
          text: "📱 App que pide información personal",
          isAppropriate: false,
          category: "Aplicaciones",
          explanation: "¡Cuidado! Nunca compartas información personal con desconocidos."
        },
        {
          id: 5,
          text: "🏃‍♂ Video de ejercicios para niños",
          isAppropriate: true,
          category: "Deportes",
          explanation: "¡Excelente! El ejercicio es muy importante para mantenerte sano."
        },
        {
          id: 6,
          text: "💬 Mensaje de un extraño pidiendo encontrarse",
          isAppropriate: false,
          category: "Comunicación",
          explanation: "¡Alerta! Nunca te encuentres con extraños. Cuéntale a un adulto de confianza."
        },
        {
          id: 7,
          text: "🎨 Tutorial de manualidades",
          isAppropriate: true,
          category: "Arte",
          explanation: "¡Fantástico! Las manualidades desarrollan tu creatividad."
        },
        {
          id: 8,
          text: "🚗 Juego de carreras apropiado para niños",
          isAppropriate: true,
          category: "Juegos",
          explanation: "¡Perfecto! Los juegos de carreras sin violencia son muy divertidos."
        }
      ];

      const [currentItem, setCurrentItem] = useState(null);
      const [score, setScore] = useState(0);
      const [items, setItems] = useState(gameItems);
      const [gameOver, setGameOver] = useState(false);
      const [feedback, setFeedback] = useState('');
      const [showFeedback, setShowFeedback] = useState(false);
      const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);

      // Animations are omitted for web compatibility

      useEffect(() => {
        startNewGame();
      }, []);

      const startNewGame = () => {
        const shuffled = [...gameItems].sort(() => Math.random() - 0.5);
        setItems(shuffled);
        setCurrentItem(shuffled[0]);
        setScore(0);
        setGameOver(false);
        setConsecutiveCorrect(0);
      };

      const handleAnswer = (userAnswer) => {
        if (!currentItem) return;
        const isCorrect = userAnswer === currentItem.isAppropriate;

        if (isCorrect) {
          setScore(score + 10);
          setConsecutiveCorrect(consecutiveCorrect + 1);
          setFeedback("¡Correcto! 🎉\n" + currentItem.explanation);
        } else {
          setConsecutiveCorrect(0);
          setFeedback("¡Oops! 😅\n" + currentItem.explanation);
        }

        setShowFeedback(true);

        setTimeout(() => {
          setShowFeedback(false);
          nextItem();
        }, 2000);
      };

      const nextItem = () => {
        const currentIndex = items.findIndex(item => item.id === currentItem?.id);
        if (currentIndex < items.length - 1) {
          setCurrentItem(items[currentIndex + 1]);
        } else {
          setGameOver(true);
        }
      };

      const getScoreMessage = () => {
        const totalItems = items.length;
        const percentage = (score / (totalItems * 10)) * 100;

        if (percentage >= 80) {
          return "¡Eres un experto en seguridad digital! 🏆";
        } else if (percentage >= 60) {
          return "¡Buen trabajo! Sigue aprendiendo 📚";
        } else {
          return "¡Sigue practicando para ser más seguro! 💪";
        }
      };

      if (gameOver) {
        return React.createElement('div', { className: "p-6 bg-purple-50 rounded-xl shadow-md text-center border border-purple-200" },
          React.createElement('h3', { className: "text-2xl font-bold text-purple-800 mb-4" }, "¡Juego Terminado!"),
          React.createElement('div', { className: "text-xl font-bold text-green-700 mb-2" }, `Puntuación Final: ${score}`),
          React.createElement('div', { className: "mb-4 text-lg" }, getScoreMessage()),
          React.createElement('button', {
            className: "mt-4 py-2 px-6 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors",
            onClick: startNewGame
          }, "🔄 Jugar de Nuevo")
        );
      }

      if (showFeedback) {
        return React.createElement('div', { className: "p-6 bg-purple-50 rounded-xl shadow-md text-center border border-purple-200" },
          React.createElement('div', { className: "text-lg font-semibold text-purple-900" }, feedback)
        );
      }

      return React.createElement('div', { className: "p-6 bg-purple-50 rounded-xl shadow-md text-center border border-purple-200" },
        React.createElement('h3', { className: "text-xl font-bold text-purple-800 mb-4" }, "🛡 Detector de Contenido Seguro"),
        React.createElement('div', { className: "mb-2 text-purple-700" }, `Puntos: ${score}`),
        consecutiveCorrect > 0 && React.createElement('div', { className: "mb-2 text-pink-600" }, `¡Racha: ${consecutiveCorrect}! 🔥`),
        React.createElement('div', { className: "bg-white rounded-lg p-4 mb-4" },
          React.createElement('div', { className: "mb-2 text-gray-700" }, `Categoría: ${currentItem?.category}`),
          React.createElement('div', { className: "text-lg font-bold mb-2" }, currentItem?.text),
          React.createElement('div', { className: "mb-4 text-gray-700" }, "¿Es esto apropiado para tu edad?")
        ),
        React.createElement('div', { className: "flex flex-col gap-2 mb-4" },
          React.createElement('button', {
            className: "py-2 px-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors mb-2",
            onClick: () => handleAnswer(true)
          }, "✅ SÍ, es seguro"),
          React.createElement('button', {
            className: "py-2 px-4 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors",
            onClick: () => handleAnswer(false)
          }, "❌ NO, es peligroso")
        ),
        React.createElement('div', { className: "mt-2 text-purple-700" },
          `Pregunta ${items.findIndex(item => item.id === currentItem?.id) + 1} de ${items.length}`
        ),
        React.createElement('div', {
          className: "w-full h-2 bg-purple-100 rounded mt-2 mb-2"
        },
          React.createElement('div', {
            className: "h-2 bg-purple-400 rounded",
            style: { width: `${((items.findIndex(item => item.id === currentItem?.id) + 1) / items.length) * 100}%` }
          })
        )
      );
    },
  },
  {
    id: 38,
    title: "Seguridad en Videojuegos",
    description: "Juega seguro y protege tu información en línea.",
    ageGroup: ["niños"],
     videoUrl: "https://www.youtube.com/watch?v=pQhrxCMOvx8",
  },
    {
    id: 39,
    title: "Phishing",
    description: "Descubre qué son los mensajes falsos que intentan engañarte para robar tu información, y cómo evitarlos.",
    ageGroup: ["niños"],
    graphic: require("../infografias/Infografiafish.png"),
  },
  {
    id: 40,
    title: "Bloquear y Reportar",
    description: "Aprende cómo bloquear a personas que se portan mal en internet y cómo avisar a un adulto o a la plataforma.",
    ageGroup: ["niños"],
    graphic: require("../infografias/InfografiaByR.png"),
  },
];
