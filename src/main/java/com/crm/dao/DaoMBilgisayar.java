/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.dao;

import java.util.ArrayList;

/**
 *
 * @author haye
 */
public class DaoMBilgisayar implements DaoInterface<Bilgisayar>{

    public int ekle(Bilgisayar model) {
        return DaoH.ekle(model);
    }

    public boolean guncelle(int id, Bilgisayar yeniModel) {
        return DaoH.guncelle(id, yeniModel);
    }

    public Bilgisayar cek(int id) {
        return DaoH.bilgiGetir(id, Bilgisayar.class);
    }

    public ArrayList<Bilgisayar> listele(String hql) {
        return DaoH.listele(hql);
    }

    public boolean sil(int id) {
        return DaoH.sil(id, Bilgisayar.class);
    }

    public boolean kaliciSil(int id) {
        return DaoH.tamamenSil(id, Bilgisayar.class);
    }
    
}
