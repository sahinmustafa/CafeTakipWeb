package com.crm.service;

import com.crm.dao.MusteriDao;
import com.crm.helper.database.Helper;
import com.crm.model.Musteri;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Mustafa-Bilgisay
 */
@Service("service")
public class MusteriServiceImpl implements MusteriService<Musteri>{

    @Autowired
    protected MusteriDao dao;
    
    public int musteriEkle(HashMap params) {
        Musteri m = getHashMapToMusteri(params);
        
        return dao.musteriEkle(m);
    }

    public boolean musteriGuncelle(HashMap params) {
        Musteri m = getHashMapToMusteri(params);
        
        return dao.musteriGuncelle(m);
    }

    public Musteri getir(int id) {
        return dao.getir(id);
    }

    public List<Musteri> listele() {
        return dao.listele();
    }

    public boolean sil(int id) {
        return dao.sil(id);
    }

    public boolean kaliciSil(int id) {
        return dao.kaliciSil(id);
    }
    
    public Musteri getHashMapToMusteri(HashMap params){
        Musteri m = new Musteri();
        m.setCOid(Integer.parseInt( (String) Helper.getHasMapValue(params, "id")));
        m.setAd((String) Helper.getHasMapValue(params, "ad"));
        m.setSoyad((String) Helper.getHasMapValue(params, "soyad"));
        m.setBitisTarihi(new Date((String) Helper.getHasMapValue(params, "bitisTarihi")));
        m.setBorc(Double.parseDouble((String) Helper.getHasMapValue(params, "borc")));
        m.setHarcanan(Integer.parseInt((String) Helper.getHasMapValue(params, "kullanilanSure")));
        m.setIndirim(Integer.parseInt((String) Helper.getHasMapValue(params, "indirim")));
        m.setKredi(Integer.parseInt((String) Helper.getHasMapValue(params, "kalanSure")));
        m.setOdemeSecenek((String) Helper.getHasMapValue(params, "odemeSecenek"));
        m.setUcretSecenek((String) Helper.getHasMapValue(params, "ucretSecenek"));
        
        return m;
    }
    
}
