/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.dao;

import com.crm.model.Calisan;
import java.util.ArrayList;

/**
 *
 * @author haye
 */
public class DaoMCalisan implements DaoInterface<Calisan>{

    public int ekle(Calisan model) {
        return DaoH.ekle(model);
    }

    public boolean guncelle(Calisan yeniModel) {
        return DaoH.guncelle(yeniModel);
    }

    public Calisan cek(int id) {
        return (Calisan) DaoH.bilgiGetir(id, Calisan.class);
    }

    public ArrayList<Calisan> listele(String hql) {
        return (ArrayList<Calisan>) DaoH.listele(hql);
    }

    public boolean sil(int id) {
        return DaoH.sil(id, Calisan.class);
    }

    public boolean kaliciSil(int id) {
        return DaoH.tamamenSil(id, Calisan.class);
    }
    
}
