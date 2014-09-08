
package com.crm.dao;

import com.crm.model.Musteri;
import java.util.List;

/**
 *
 * @author Mustafa-Bilgisay
 */
public interface MusteriDao <Model extends Musteri>{
    
    public int musteriEkle(Model m);
    
    public boolean musteriGuncelle(Model m);
    
    public Model getir(int id);
    
    public List<Model> listele();
    
    public boolean sil(int id);
    
    public boolean kaliciSil(int id);
}
