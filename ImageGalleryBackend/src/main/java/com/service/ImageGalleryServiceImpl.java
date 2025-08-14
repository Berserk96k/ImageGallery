package com.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.dao.ImageGalleryRepository;
import com.model.ImageGalleryModel;

@Service

public class ImageGalleryServiceImpl implements ImageGalleryService {

    @Autowired
    private ImageGalleryRepository imageRepository;
    
    
    @Override
    public ImageGalleryModel storeFile(MultipartFile file) {
    	ImageGalleryModel img =new ImageGalleryModel();
        img.setName(file.getOriginalFilename());
        try {
            img.setImageData(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return imageRepository.save(img);
    }
    
     @Override
        public Optional<ImageGalleryModel> getFile(Long fileId) {
            
             return imageRepository.findById(fileId);
        }

        @Override
        public List<ImageGalleryModel> getAllFile() {
            
             return imageRepository.findAll();
        }

        @Override
        public boolean deleteImageFile(Long fileId) {
            if(imageRepository.existsById(fileId)) {
                imageRepository.deleteById(fileId);
                return true;
            }
            return false;
            
        }

}