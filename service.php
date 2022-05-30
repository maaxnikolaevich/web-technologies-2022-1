<?php
function getData()
{
    $dbconn = pg_connect("conn_string")
    or die('Connection error' . pg_last_error());
    $query = 'SELECT * FROM table_menu';
    $result = pg_query($query) or die('Query error: ' . pg_last_error());
    $resultList = [];
    while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
        array_push($resultList, $line);
    }
    pg_free_result($result);
    pg_close($dbconn);
    return $resultList;
}

function handleData(): array
{
    $data = getData();
    $result = [];
    foreach ($data as $row) {
        if ($row['parent_id'] != null) {
            $result[$row['id']]['parent'] = $row['parent_id'];
            $result[$row['id']]['name'] = $row['node_name'];
            $result[$row['parent_id']]['child'][$row['id']] = $row['id'];
        }
        else{
            $result[$row['id']]['name'] = $row['node_name'];
        }
    }
    echo json_encode($result);
    return $result;
}

function renderElements($data, $node)
{

    if (count($node['child']) != 0) {
        echo "<div class=\"list-item \" data-parent>\n" .
            "<div class=\"list-item__inner\">\n" .
            "<img class=\"list-item__arrow\" src=\"./assets/img/chevron-down.png\" alt=\"chevron-down\" data-open>\n" .
            "<img class=\"list-item__folder\" src=\"./assets/img/folder.png\" alt=\"folder\">\n" .
            "<span>" . $node['name'] . "</span>\n" .
            "</div>\n" .
            "<div class=\"list-item__items\">";

        foreach ($node['child'] as $children) {
            renderElements($data, $data[$children]);
        }
        echo('</div> </div>');
    } else {
        echo("<div class=\"list-item__inner\">\n" .
            "<img class=\"list-item__folder\" src=\"./assets/img/folder.png\" alt=\"folder\">\n" .
            "<span>" . $node['name'] . "</span>\n" .
            "</div>");
    }

}

function printData()
{
    $data = handleData();
    echo('<div class="list-items" id="list-items">');
    foreach ($data as $root) {
        if ($root['parent'] == "") {
            renderElements($data, $root);
        }
    }
    echo('</div>');
}

printData();

?>
