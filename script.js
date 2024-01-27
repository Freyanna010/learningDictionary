const words = [
  {
    original: "Wassup",
    translation: "здарова",
  },
  {
    original: "Bay",
    translation: "покеда",
  },
  {
    original: "Programmer",
    translation: "программист",
  },
  {
    original: "Cat",
    translation: "котик",
  },
];

const notificationMessages = {
  ansver: {
    right: "Хорошо!",
    wrong: "Мимо(",
  },
  result: {
    Succes: "Молодец!",
    UnSucces: "Увы, Вы дурилка(",
  },
};

const settings = {
  correctAnswerMinPercent: 50,
};

const result = {
  correctAnswerCount: 0,
};

for (let i = 0; i < words.length; i++) {
  let userAnsver = prompt(`Переведите слово: ${words[i].original}`, "");
  let correctUserAnsver = userAnsver.toLowerCase();
  if (correctUserAnsver === words[i].translation) {
    document.write(notificationMessages.ansver.right, "<br/>");
    result.correctAnswerCount++;
  } else {
    document.write(notificationMessages.ansver.wrong, "<br/>");
  }
}

const usserCorrectAnswerPersent =
  (result.correctAnswerCount / words.length) * 100;
if (usserCorrectAnswerPersent > settings.correctAnswerMinPercent) {
  alert(notificationMessages.result.Succes);
} else {
  alert(notificationMessages.result.UnSucces);
}
