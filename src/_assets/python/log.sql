-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema apachelog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema apachelog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `apachelog` DEFAULT CHARACTER SET utf8 ;
USE `apachelog` ;

-- -----------------------------------------------------
-- Table `apachelog`.`log`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `apachelog`.`log` ;

CREATE TABLE IF NOT EXISTS `apachelog`.`log` (
  `log_id` INT NOT NULL AUTO_INCREMENT,
  `time` FLOAT NULL,
  `len` INT NULL,
  `status` VARCHAR(45) NULL,
  `page` VARCHAR(255) NULL,
  `method` VARCHAR(45) NULL,
  `protocol` VARCHAR(45) NULL,
  `log` VARCHAR(255) NULL,
  `ip` VARCHAR(24) NULL,
  PRIMARY KEY (`log_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
