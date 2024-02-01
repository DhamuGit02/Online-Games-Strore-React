-- MySQL dump 10.13  Distrib 5.7.40, for Win64 (x86_64)
--
-- Host: localhost    Database: gamestoreDB
-- ------------------------------------------------------
-- Server version	5.7.40-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `gameID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `os` varchar(200) DEFAULT NULL,
  `cpu` varchar(200) DEFAULT NULL,
  `gpu` varchar(200) DEFAULT NULL,
  `ram` varchar(20) DEFAULT NULL,
  `sound_card` varchar(200) DEFAULT NULL,
  `hdd` varchar(20) DEFAULT NULL,
  `pegi` varchar(2) DEFAULT 'A',
  `discount` int(11) DEFAULT NULL,
  `developer` varchar(50) DEFAULT NULL,
  `release_date` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`gameID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Grand Theft Auto 5','Action-Adventure','The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You?ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.',1160,'Windows 10 64 bit, Windows 8.1 64 bit','Intel Core i5 3470 @ 3.2GHZ (4 CPUs), AMD X8 FX-8350 @ 4GHZ (8 CPUs)','NVIDIA GTX 660 2GB, AMD HD7870 2GB','8 GB','100% DirectX 10 compatible','90 GB','A',50,'Rockstar Games','17/08/23'),(2,'Valorant','Action-Shooter','VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork. ',2400,'Windows 10 64 bit','Intel i3-4150 (Intel), Ryzen 3 1200 (AMD)','GeForce GT 730, Radeon R7 240','4 GB','100% DirectX 10 compatible','20 GB','A',100,'Riot Games','2/06/20'),(3,'Forza Horizon 4','Racing','Dynamic seasons change everything at the world?s greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world. ',1299,'Windows 10 version 15063.0 or higher','Intel i3-4150 (Intel), Ryzen 3 1200 (AMD), Intel i7-3820 @ 3.6Ghz','NVidia 650TI OR AMD R7 250x','8 GB','DirectX 12','100 GB','UA',10,'Turn 10 Studios','28/08/18'),(4,'World War Z','Horror','World War Z is the ultimate co-op zombie shooter and the next evolution of the original hit World War Z that has now captivated over 15 million players. Fight off hordes of ravenous zombies in intense story episodes across new zombie-ravaged locations around the world.',899,'Windows 10 version 15063.0 or higher','Intel i3-4150 (Intel), Ryzen 3 1200 (AMD), Intel i7-3820 @ 3.6Ghz','AMD R7-240, GForce 650Ti, Intel 630','8 GB','DirectX 11','50 GB','A',50,'Saber Interactive','16/03/19'),(5,'Forza Horizon 5','Racing','Your Ultimate Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world?s greatest cars. Blast off to Hot Wheels Park and experience the most extreme tracks ever devised. Requires Forza Horizon 5 game, expansion sold separately',3499,'Windows 10 version 15063.0 or higher','Intel i3-4150 (Intel), Ryzen 3 1200 (AMD), Intel i7-3820 @ 3.6Ghz','AMD R7-240, GForce 650Ti, Intel 630','8 GB','DirectX 12','110 GB','UA',10,'Playground Games','05/11/21'),(6,'Hogwarts Legacy','Adventure','Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.',2999,'Windows 10 version 15063.0 or higher','Intel Core i5-8400 OR AMD Ryzen 5 2600','NVIDIA GeForce GTX 1070 or AMD RX Vega 56','8 GB','DirectX 12','85 GB','UA',20,'Avalanche Software','10/02/23'),(7,'Goat Simulator 3','Adventure','Pilgor?s baaack! Gather your herd and venture forth into Goat Simulator 3; an all-new, totally realistic, multiplayer sandbox farmyard experience.',1218,'Windows 10','Intel Core i5-8400 OR AMD Ryzen 5 2600','NVIDIA GeForce GTX 1050 Ti (4GB VRAM)','8 GB','DirectX 11','12 GB','UA',35,'Coffee Stain Studios','17/11/22'),(8,'PUBG','Action-Shooter','Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.',2400,'64-bit Windows 10, Windows 8.1, Windows 10','Intel Core i5-8400 OR AMD Ryzen 5 2600','NVIDIA GeForce GTX 960 2GB , AMD Radeon R7 370 2GB','8 GB','DirectX 11','40 GB','A',100,'Tencent Games','18/04/18'),(9,'Battlefield 4','Action-Shooter','Embrace unrivaled destruction in Battlefield 4?. Revel in the glorious chaos of all-out war packed with rewarding, tactical challenges in an interactive environment. ',2499,'64-bit Windows 10, Windows 8.1, Windows 10','Intel Core i5-8400 OR AMD Ryzen 5 2600','NVIDIA GeForce GTX 960 2GB , AMD Radeon R7 370 2GB','8 GB','DirectX 11','30 GB','A',20,'Playground Games','29/10/13'),(10,'Battlefield 5','Action-Shooter','This is the ultimate Battlefield V experience. Enter mankind?s greatest conflict with the complete arsenal of weapons, vehicles, and gadgets plus the best customization content of Year 1 and 2. ',2499,'64-bit Windows 10, Windows 8.1, Windows 10','Intel Core i5-8400 OR AMD Ryzen 5 2600','NVIDIA GeForce® GTX 1050 , NVIDIA GeForce® GTX 660 2GB or AMD Radeon? RX 560, HD 7850 2GB','8 GB','DirectX 11','50 GB','A',20,'Playground Games','09/11/18'),(11,'Battlefield 2042','Action-Shooter','Be a class above in Season 4: Eleventh Hour. Battlefield? 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. ',2499,'64-bit Windows 10, Windows 8.1, Windows 10','Intel Core i5-8400, Core i5 6600K OR AMD Ryzen 5 2600','NVIDIA GeForce® GTX 1050 , NVIDIA GeForce® GTX 660 2GB or AMD Radeon? RX 560, HD 7850 2GB','8 GB','DirectX 12','100 GB','A',20,'DICE','06/10/21'),(12,'Genshin Impact','Action-Adventure','Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven ? the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds...',2400,'Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bi','Intel Core i5-8400, Core i5 6600K OR AMD Ryzen 5 2600','NVIDIA® GeForce® GT 1030 or better','8 GB','DirectX 11','30 GB','UA',100,'miHoYo','28/09/20');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `password` varbinary(255) DEFAULT NULL,
  `age` tinyint(4) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-29 10:09:36
