/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.controller;

import com.crm.helper.json.JSONHelper;
import com.crm.model.Calisan;
import com.crm.service.SerCalisan;
import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author haye
 */
public class ContCalisan {
    private final SerCalisan service;
    
    public ContCalisan() {
        service = new SerCalisan();
    }
    
    @RequestMapping(value ="kisiList")
    public void getAllKisiList(HttpServletRequest request, HttpServletResponse response) throws IOException{
            
            System.out.println("getAllKisiList()");

            JSONHelper<Calisan> json = new JSONHelper<Calisan>(JSONHelper.objectType.Calisan);
            String jsonCalisanListesi = json.Object2String(service.hepsiniListele());
            
            response.getWriter().write(jsonCalisanListesi);
    }
}
