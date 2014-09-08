
package com.crm.service;

import com.crm.model.Musteri;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author Mustafa-Bilgisay
 */
public interface MusteriService <Model extends Musteri>{
    
    public int musteriEkle(HashMap params);
    
    public boolean musteriGuncelle(HashMap params);
    
    public Model getir(int id);
    
    public List<Model> listele();
    
    public boolean sil(int id);
    
    public boolean kaliciSil(int id);
}
