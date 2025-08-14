package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.model.ImageGalleryModel;
import com.service.ImageGalleryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ImageGalleryController {

    
    @Autowired
    private ImageGalleryService imageService;
    
    @PostMapping("/upload")
    public ResponseEntity<String> addFile(@RequestParam("file") MultipartFile file){
    	ImageGalleryModel img=imageService.storeFile(file);
        return ResponseEntity.ok("File upload successfully "+img.getName());
    }
    
    @GetMapping("/getAll")
    public ResponseEntity<List<ImageGalleryModel>> getAllFile(){
        List<ImageGalleryModel> imgList=imageService.getAllFile();
        return ResponseEntity.status(HttpStatus.OK).header("getAll", "download all fils").body(imgList);
    }
    
    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long id){
        Optional<ImageGalleryModel> imgOptional=imageService.getFile(id);
        ImageGalleryModel image=imgOptional.get();
        
        
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment;file").body(new ByteArrayResource(image.getImageData()));
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id){
        imageService.deleteImageFile(id);
        
        
        return ResponseEntity.ok("Image Deleted");
    }
    /*http://localhost:8082/delete/1*/
    
}