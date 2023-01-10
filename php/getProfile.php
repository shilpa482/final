<?php
include_once("database.php");
$id = $_GET['id'];
$postdata = file_get_contents("php://input");
if(isset($id) && !empty($id))
{

$sql = "SELECT * FROM students where id='$id'";
if($result = mysqli_query($mysqli,$sql))
{
$rows = [];
$i = 0;
while($row = mysqli_fetch_assoc($result))
{
      // $rows[$i]['id'] = $row['id'];
		//$rows[$i]['name'] = $row['name'];
		//$rows[$i]['phone'] = $row['phone'];
		//$i++;
        echo json_encode($row);
        break;
}
//echo json_encode($rows);
}
else
{
http_response_code(404);
}

}

?>
