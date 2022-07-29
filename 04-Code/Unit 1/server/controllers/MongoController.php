<?php
	
	require $_SERVER['DOCUMENT_ROOT'].'/proyect/server/vendor/autoload.php'; 
    

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

    public static function create_user($user,$mail,$password,$dni){
        $collection = client->selectCollection('Users','User');
        $collection->insertOne([
            'user' => $user,
            'mail' => $mail,
            'password' => $password,
            'dni' => $dni,
            'type' => 'user',
            'active' => false,
        ]);
    }

    public static function login($user,$password){
        $collection = client->selectCollection('Users','User'); 
        $document = $collection->findOne([ 'user' => $user ,
                                           'password' => $password]);
        $json = MongoDB\BSON\toJSON(MongoDB\BSON\fromPHP($document));
        $decode = json_decode($json);
        return $decode;

    }

    public static function is_login(){
        $collection = client->selectCollection('Users','IsLogin'); 
        $document = $collection->findOne([ 'Id' => '123456789']);
        $json = MongoDB\BSON\toJSON(MongoDB\BSON\fromPHP($document));
        $decode = json_decode($json);
        return $decode->is_login;
    }

    public static function set_login($is_login){
        $collection = client->selectCollection('Users','IsLogin');
        $collection->updateMany(
            ['Id' => '123456789'],
            ['$set' => ['is_login' => $is_login]]);
    }

    

    public static function delete_data_repository($link){
        $collection = client->selectCollection('Repository','Fauna');
        $collection->deleteOne(["url_image" => $link]);
    }

    }
	
?>