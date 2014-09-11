package com.crm.dao;

import com.crm.model.Musteri;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Mustafa-Bilgisay
 */
@Repository("dao")
public class MusteriImpl implements MusteriDao<Musteri>{

    @Autowired
    KisiDao kisiDao;
    
    public int musteriEkle(Musteri m) {
        kisiDao.addKisi(m);
        return -1;
    }

    public boolean musteriGuncelle(Musteri m) {
        
        return kisiDao.kisiGuncelle(m);
    }

    public Musteri getir(int id) {
        Musteri m = (Musteri) DaoH.bilgiGetir(id, Musteri.class);
        return m;
    }

    public List<Musteri> listele() {
        String hql = "FROM Musteri WHERE silinmis = 1";
        ArrayList<Musteri> list;
        list = (ArrayList<Musteri>) DaoH.listele(hql);
        return list;
    }

    public boolean sil(int id) {
        return DaoH.sil(id, Musteri.class);
    }

    public boolean kaliciSil(int id) {
        return DaoH.tamamenSil(id, Musteri.class);
    }
    
}
