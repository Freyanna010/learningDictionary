function showHelloMessage(_notificationMessages) {
  alert(_notificationMessages.start);
}


function startTraing(_words, _result) {
  for (let i = 0; i < _words.length; i++) {
    let userAnsver = prompt(`Переведите слово: ${_words[i].original}`, "");
    let correctUserAnsver = userAnsver.toLowerCase();
    if (correctUserAnsver === _words[i].translation) {
      document.write(notificationMessages.ansver.right, "<br/>");
      _result.correctAnswerCount++;
    } else {
      document.write(notificationMessages.ansver.wrong, "<br/>");
    }
  }
}
function getPercentage(_result, _words) {
 return _result.correctAnswerCount / _words.length * 100;
}


function showResult(_result, _words, _settings, _notificationMessages) {
  const usserCorrectAnswerPersent = getPercentage(result, words);

  if (usserCorrectAnswerPersent > settings.correctAnswerMinPercent) {
    document.write(notificationMessages.result.Succes);
  } else {
    document.write(notificationMessages.result.UnSucces);
  }
}



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
  start: "Hi. Do you know English?",
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

showHelloMessage(notificationMessages);
startTraing(words,result);
getPercentage(result,words);
showResult(result, words, settings, notificationMessages);
