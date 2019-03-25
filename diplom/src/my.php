<?php 
  if (!empty($_POST["username5"])&&!empty($_POST["phone5"]))
  {
  echo "Получены новые вводные:<br>";
  echo "имя - ";
  echo $_POST["username5"];
  echo "<br>возраст - ";
  echo $_POST["phone5"];
  echo " лет";
  }
  else
  {
  echo "Переменные не дошли. Проверьте все еще раз.";
  }

 ?>