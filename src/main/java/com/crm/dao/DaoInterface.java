package com.crm.dao;

import java.util.ArrayList;

/**
 *
 * @author haye
 * @param <model>
 */
public interface DaoInterface <Model extends Object>{
    
    public int ekle(Model model);
    public boolean guncelle(Model yeniModel);
    
    public Model cek(int id);
    public ArrayList<Model> listele(String hql);
    
    public boolean sil(int id);
    public boolean kaliciSil(int id);
    

}
