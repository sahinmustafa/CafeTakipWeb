/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.dao;

import com.crm.model.Bilgisayar;
import java.util.ArrayList;

/**
 *
 * @author haye
 */
public class DaoMBilgisayar implements DaoInterface<Bilgisayar>{

    public int ekle(Bilgisayar model) {
        return DaoH.ekle(model);
    }

    public boolean guncelle(Bilgisayar yeniModel) {
        return DaoH.guncelle(yeniModel);
    }

    public Bilgisayar cek(int id) {
        return (Bilgisayar) DaoH.bilgiGetir(id, Bilgisayar.class);
    }

    public ArrayList<Bilgisayar> listele(String hql) {
        return (ArrayList<Bilgisayar>) DaoH.listele(hql);
    }

    public boolean sil(int id) {
        return DaoH.sil(id, Bilgisayar.class);
    }

    public boolean kaliciSil(int id) {
        return DaoH.tamamenSil(id, Bilgisayar.class);
    }
    
}
