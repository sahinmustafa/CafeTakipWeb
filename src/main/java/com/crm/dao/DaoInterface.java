package com.crm.dao;

import java.util.ArrayList;

/**
 *
 * @author haye
 * @param <model>
 */
public interface DaoInterface <model extends Object>{
    
    public int ekle();
    public boolean guncelle(int id, model yeniModel);
    
    public model cek(int id);
    public ArrayList<model> listele(String hql);
    
    public boolean sil(int id);
    public boolean kaliciSil(int id);
    

}
