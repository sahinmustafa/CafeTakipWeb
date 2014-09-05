/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.service;

import com.crm.dao.DaoMCalisan;
import com.crm.helper.database.Helper;
import com.crm.model.Calisan;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author haye
 */
public class SerCalisan implements ServiceInterface <Calisan>{

    protected DaoMCalisan dao;
    
    public void ekle(HashMap params) {
        Calisan m = new Calisan();
        
        m.setID(Integer.parseInt((String) Helper.getHasMapValue(params, "id")));
        m.setAd((String) Helper.getHasMapValue(params,"ad"));
        m.setSoyad((String) Helper.getHasMapValue(params,"soyad"));
        m.setSehir((String) Helper.getHasMapValue(params,"sehir"));
        m.setYas(Integer.parseInt((String) Helper.getHasMapValue(params,"yas")));

        dao.ekle(m);
    }

    public List<Calisan> hepsiniListele() {
        return dao.listele("FROM Calisan");
    }

    public void sil(String[] idList) {
        if(idList == null)
            return;

        for(String idStr : idList){
                int id = Integer.parseInt(idStr);
                dao.sil(id);
        }
    }

    public void guncelle(Calisan k) {
        dao.guncelle(k);
    }

    public Calisan getir(int id) {
        return dao.cek(id);
    }

    public List<Calisan> listele(HashMap params) {
        if(params == null || params.isEmpty())
            return new ArrayList<Calisan>();

        String hql = "FROM Kisi ";
        String id = (String) Helper.getHasMapValue(params, "id");
        String ad = (String) Helper.getHasMapValue(params, "ad");
        
        if(!Helper.isEmpty(id))
            hql += Helper.addWhereClause(hql, "ID", id);
        if(!Helper.isEmpty(ad)) {
            hql +=Helper.addLikeClause(hql, "ad", ad);
        } 
        return dao.listele(hql);
    }
    
}
