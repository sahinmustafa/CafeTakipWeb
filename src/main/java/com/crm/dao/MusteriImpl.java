package com.crm.dao;

import com.crm.model.Musteri;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Mustafa-Bilgisay
 */
@Repository("dao")
public class MusteriImpl implements MusteriDao<Musteri>{

    
    DaoH dao;
    
    public int musteriEkle(Musteri m) {
        
        return DaoH.ekle(m);
    }

    public boolean musteriGuncelle(Musteri m) {
        
        return DaoH.guncelle(m);
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
