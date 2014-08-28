package com.crm.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.crm.helper.json.JSON;
import com.crm.model.Kisi;
import com.crm.service.KisiService;
import java.util.HashMap;
import org.json.JSONException;
import org.json.JSONObject;

@Controller
public class KisiController{

    @Autowired
    protected KisiService kisiService;


    @RequestMapping(value = "kisiBilgiGetir")
    public void kisiBilgiGetir(HttpServletRequest request, 
                                            HttpServletResponse response) throws IOException, JSONException{
            System.out.println("kisiBilgileriGetir()");
            
            int id = Integer.parseInt(request.getParameter("id"));
            Kisi k = kisiService.getKisi(id);

            response.getWriter().write(JSON.getKisi(k));
    }


    @RequestMapping(value ="kisiList")
    public void getAllKisiList(HttpServletRequest request, 
                    HttpServletResponse response) throws IOException{
            System.out.println("getAllKisiList()");

            String kisiList = JSON.jsonKisiList(kisiService.allKisiList());
            response.getWriter().write(kisiList);
    }

    @RequestMapping(value ="/kisiOlustur")
    public void kisiOlusturPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
            System.out.println("kisiOlusturPost");

            HashMap params = (HashMap) request.getParameterMap();
            kisiService.addKisi(params);

            response.getWriter().write("{\"success\" : true}");
    }

    @RequestMapping(value ="kisiSil")
    public void kisiSil(HttpServletRequest request, HttpServletResponse response){
            System.out.println("kisiSil()");

            String params = request.getParameter("idList");
            String[] idList = JSON.getValuesFromJSONString(params, "id");

            //System.out.println(params);
            kisiService.kisiSil(idList);
    }

    @RequestMapping(value = "kisiAra")
    public void kisiAra(HttpServletRequest request, HttpServletResponse response) throws IOException{
        HashMap params = (HashMap) request.getParameterMap();
        String jsonKisiList = JSON.jsonKisiList(kisiService.kisiList(params));
        
        response.getWriter().write(jsonKisiList);
    }
    
    @RequestMapping(value = "bilgisayarList")
    public void bilgisayarList(HttpServletRequest request, HttpServletResponse response) throws IOException{
        String jsonKisiList = JSON.jsonBilgisayarList();
        
        response.getWriter().write(jsonKisiList);
    }
    
}
