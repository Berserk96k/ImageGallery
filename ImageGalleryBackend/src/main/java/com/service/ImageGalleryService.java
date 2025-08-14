package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.model.ImageGalleryModel;

public interface ImageGalleryService {
    
    public ImageGalleryModel storeFile(MultipartFile multipart);
    
    public Optional<ImageGalleryModel> getFile(Long fileId);
    public List<ImageGalleryModel> getAllFile( );
    public boolean deleteImageFile(Long fileId);

}