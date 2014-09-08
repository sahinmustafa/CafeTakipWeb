
package com.crm.controller;

import com.crm.service.MusteriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Mustafa-Bilgisay
 */
@Controller
public class MusteriCont {
    
    @Autowired
    MusteriService service;
    
    @RequestMapping(value="musteriEkle")
    public void musteriEkle(){
        System.out.println("musteriEkle()");
    }
    
    @RequestMapping(value="musteriList")
    public void musteriList(){
        System.out.println("musteriList()");
    }
    
    @RequestMapping(value="musteriGuncelle")
    public void musteriGuncelle(){
        System.out.println("musteriGuncelle()");
    }
    
    @RequestMapping(value="musteriSil")
    public void musteriSil(){
        System.out.println("musteriSil()");
    }
}
