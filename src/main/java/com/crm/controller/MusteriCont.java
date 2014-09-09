
package com.crm.controller;

import com.crm.service.MusteriService;
import java.io.IOException;
import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
    public void musteriEkle(HttpServletRequest request, HttpServletResponse response) throws IOException{
        System.out.println("musteriEkle()");
        
        HashMap params = (HashMap) request.getParameterMap(); 
        System.out.println("AD : " + request.getParameter("ad"));
        service.musteriEkle(params);
        
        response.getWriter().write("{\"success\" : true}");
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
