<?php
// if (!isset($_POST['params']) && !empty($_POST['params'])) {
//     $params = $_POST['params'];
//
//     $jsonObject = json_encode($params);
//     file_put_contents('location2.json', $jsonObject);
// }

//var_dump($_POST);

header('Content-Type: application/json');

if (isset($_POST['roomID'])) {
    $roomID = $_POST['roomID'];
    //$jsonObject = json_encode($params);
    //if (is_writable('location2.json')) {
    //    file_put_contents('location2.json', $jsonObject);
    //    echo "success";
    //} else {
    //    echo "file is not writable, check permissions";
    //}
    $success = array(
      'success' => 'success',
      'roomID' => $roomID
    );
    $json = json_encode($success);
} else {
    $error = array(
      'error' => 'Missing room ID',
      'name' => 'Navid'
    );
    $json = json_encode($error);
}

echo $json;
?>
