package com.crm.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.dao.KisiDao;
import com.crm.helper.database.Helper;
import com.crm.model.Kisi;
import java.util.ArrayList;
import java.util.HashMap;

@Service("kisiService")
public class KisiServiceImpl implements KisiService{

    @Autowired
    protected KisiDao dao;

    public List<Kisi> allKisiList(){
            return dao.allKisiList();
    }

    public void addKisi(HashMap params){
        Kisi k = new Kisi();
        
        k.setID(Integer.parseInt((String) Helper.getHasMapValue(params, "id")));
        k.setAd((String) Helper.getHasMapValue(params,"ad"));
        k.setSoyad((String) Helper.getHasMapValue(params,"soyad"));
        k.setSehir((String) Helper.getHasMapValue(params,"sehir"));
        k.setYas(Integer.parseInt((String) Helper.getHasMapValue(params,"yas")));

        dao.addKisi(k);
    }

    public void kisiSil(String[] idList) {
            if(idList == null)
                    return;

            for(String idStr : idList){
                    int id = Integer.parseInt(idStr);
                    dao.kisiSil(id);
            }
    }

    public void kisiGuncelle(Kisi k) {
            dao.kisiGuncelle(k);
    }

    public Kisi getKisi(int id) {
            return dao.getKisi(id);
    }

    public List<Kisi> kisiList(HashMap params) {
        if(params == null || params.isEmpty())
            return new ArrayList<Kisi>();

        String hql = "FROM Kisi ";
        String id = (String) Helper.getHasMapValue(params, "id");
        String ad = (String) Helper.getHasMapValue(params, "ad");
        
        if(!Helper.isEmpty(id))
            hql += Helper.addWhereClause(hql, "ID", id);
        if(!Helper.isEmpty(ad)) {
            hql +=Helper.addLikeClause(hql, "ad", ad);
        } 
        return dao.kisiList(hql);
    }

}
