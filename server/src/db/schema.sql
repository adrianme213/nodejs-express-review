DROP DATABASE IF EXISTS nodejsreview;
CREATE DATABASE nodejsreview;
/*--Declare database to use*/
USE nodejsreview;

/* CREATE DATA TABLE */
DROP TABLE IF EXISTS `games`;

CREATE TABLE `games` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `time` VARCHAR(100) NOT NULL,
  `awayTeam` VARCHAR(255),
  `homeTeam` VARCHAR(255),
  `location` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/*
INSERT THREE DUMMY VALUES
*/
INSERT INTO games (id, date, time, awayTeam, homeTeam, location)
VALUES (1, '20180403', '1030 pm', 'San Antonio Spurs', 'Los Angeles Clippers',
'Staples Center, Los Angeles, CA');

INSERT INTO games (id, date, time, awayTeam, homeTeam, location)
VALUES (2, '20180403', '700 pm', 'Washington Wizards', 'Houston Rockets',
'Toyota Center, Houston, TX');

INSERT INTO games (id, date, time, awayTeam, homeTeam, location)
VALUES (3, '20180403', '800 pm', 'Boston Celtics', 'Milwaukee Bucks',
'BMO Bradley Center, Milwaukee, WI');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
