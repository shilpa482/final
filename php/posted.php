
<?php
$db_host = 'localhost';
$db_username = 'root';
$db_password = 'root@123';
$db_name = 'btech_project';
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
$sql = "SELECT * FROM postjobs ";
$result = $mysqli->query($sql);
$mysqli->close();
?>

<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <style>
        table {
            margin: 0 auto;
            font-size: large;
            border: 1px solid black;
        }
 
        h1 {
            text-align: center;
            color: #006600;
            font-size: xx-large;
            font-family: 'Gill Sans', 'Gill Sans MT',
            ' Calibri', 'Trebuchet MS', 'sans-serif';
        }
 
        td {
            background-color: #E4F5D4;
            border: 1px solid black;
        }
 
        th,
        td {
            font-weight: bold;
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
 
        td {
            font-weight: lighter;
        }
    </style>
</head>
 
<body>
    <section>

        <table>
            <tr>
                <th>Company Name</th>
                <th>Job Role</th>
                <th>Skills</th>
                <th>Compensation</th>
                <th>Job Type</th>
            </tr>
         
            <?php

                while($rows=$result->fetch_assoc())
                {
            ?>
            <tr>
                <td><?php echo $rows['companyname']; ?></td>
                <td><?php echo $rows['jobrole'];?></td>
                <td><?php echo $rows['skills'];?></td>
                <td><?php echo $rows['compensation'];?></td>
                <td><?php echo $rows['jobtype'];?></td>
            </tr>
            <?php
                }
            ?>
        </table>
    </section>
</body>
</html>