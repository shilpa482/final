<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$phone =  mysqli_real_escape_string($mysqli,trim($request->phone));
$branch =  mysqli_real_escape_string($mysqli,trim($request->branch));
//neha
//Escape Special Characters in String

//Encrypt Password
//$password = base64_encode(strrev(md5($pwd)));

//neha
if($name!="")
{
$sql = "INSERT INTO students(name,password,email,phone,branch) VALUES ('$name','$pwd','$email','$phone','$branch')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'pwd' => '',
'email' => $email,
'phone' => $phone,
'branch' => $branch,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}
}
//If User already registered with this email then show error message.
if (isset($_SESSION['registerError'])) {
    ?>
      <div class="form-group">
        <label style="color: red;">Email Already Exists! Choose A Different Email!</label>
      </div>
    <?php
      unset($_SESSION['registerError']);
    }
?>
