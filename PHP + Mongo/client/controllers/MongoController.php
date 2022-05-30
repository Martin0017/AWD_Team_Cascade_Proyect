<?php
	
	require 'C:\xampp\htdocs\client\vendor\autoload.php'; 
    

    define('client',new MongoDB\Client(
    'mongodb+srv://TeamCascade:123@clusterteamcascade.zjrq3.mongodb.net/?retryWrites=true&w=majority'));

    class MongoController{
    
    public static function search_and_get($getDB,$getCollection,$parameter,$value){
       $collection = client->selectCollection($getDB,$getCollection); 
       $document = $collection->findOne([ $parameter => $value]);
       $json = MongoDB\BSON\toJSON(MongoDB\BSON\fromPHP($document));
       $decode = json_decode($json);
       return $decode;
    }

    public static function set_data($getDB,$getCollection,$object){
        $collection = client->selectCollection($getDB,$getCollection);
        $collection->insertOne([$object]);
    }

    public static function get_all($getDB,$getCollection,$parameter,$value){
       $collection = client->selectCollection($getDB,$getCollection); 
       $document = $collection->find([ $parameter => $value]);
       return $document;
    }
    
    public static function set_data_repository($vulgar,$scientific,$description,$link,$date,$type){
        $collection = client->selectCollection('Repository','Fauna');
        $collection->insertOne([
            'scientific_name' => $scientific,
            'url_image' => $link,
            'vulgar_name' => $vulgar,
            'description' => $description,
            'date' => $date,
            'type' => $type
        ]);
    }

    public static function delete_data_repository($link){
        $collection = client->selectCollection('Repository','Fauna');
        $collection->deleteOne(["url_image" => $link]);
    }

    }
	
?>