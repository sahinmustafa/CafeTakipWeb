/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.service;

import java.util.HashMap;
import java.util.List;

/**
 *
 * @author haye
 */
public interface ServiceInterface <Model extends Object>{
    
    public void ekle(HashMap params);
    public List<Model> hepsiniListele();
    public void sil(String[] idList);
    public void guncelle(Model k);
    public Model getir(int id);
    public List<Model> listele(HashMap params);
    
}
