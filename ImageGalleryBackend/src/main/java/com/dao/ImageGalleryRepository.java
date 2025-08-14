package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.ImageGalleryModel;

public interface ImageGalleryRepository extends JpaRepository<ImageGalleryModel,Long>{

}
