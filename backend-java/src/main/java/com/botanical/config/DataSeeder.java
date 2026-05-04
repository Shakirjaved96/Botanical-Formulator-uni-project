package com.botanical.config;

import com.botanical.model.BaseCondition;
import com.botanical.model.HairCondition;
import com.botanical.model.SkinCondition;
import com.botanical.model.Formulation;
import com.botanical.model.Ingredient;
import com.botanical.repository.ConditionRepository;
import com.botanical.repository.FormulationRepository;
import com.botanical.repository.IngredientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(ConditionRepository conditionRepo,
                                   IngredientRepository ingredientRepo,
                                   FormulationRepository formulationRepo) {
        return args -> {
            if (conditionRepo.count() == 0) {
                // Seed Conditions
                BaseCondition acne = new SkinCondition(null, "Acne Breakout", "Inflammation of the skin resulting in pimples.", "Oily");
                BaseCondition oily = new SkinCondition(null, "Oily Skin", "Excess sebum production.", "Normal");
                BaseCondition dandruff = new HairCondition(null, "Severe Dandruff", "Excessive shedding of dead skin from the scalp.", "Flaky");
                BaseCondition dryScalp = new HairCondition(null, "Dry Scalp", "Lack of moisture in the scalp skin.", "Dry");
                
                conditionRepo.saveAll(Arrays.asList(acne, oily, dandruff, dryScalp));

                // Seed Ingredients
                Ingredient sandalwood = new Ingredient(null, "Sandalwood", Arrays.asList("Anti-inflammatory", "Cooling"), "Grind into a fine paste with water or rose water.");
                Ingredient multaniMitti = new Ingredient(null, "Multani Mitti", Arrays.asList("Oil absorbing", "Cleansing"), "Mix with water to form a smooth clay.");
                Ingredient fenugreek = new Ingredient(null, "Fenugreek", Arrays.asList("Anti-fungal", "Strengthening"), "Soak overnight and grind into a paste.");
                
                ingredientRepo.saveAll(Arrays.asList(sandalwood, multaniMitti, fenugreek));

                // Seed Formulations
                // Fetch the acne condition to get its ID
                BaseCondition savedAcne = conditionRepo.findByName("Acne Breakout").get();
                
                Formulation acneRemedy = new Formulation(
                    null,
                    savedAcne.getId(),
                    "Sandalwood & Clay Mask",
                    Arrays.asList(
                        new Formulation.IngredientUsage("Sandalwood", "1 Tablespoon"),
                        new Formulation.IngredientUsage("Multani Mitti", "2 Tablespoons")
                    ),
                    Arrays.asList(
                        "Mix Sandalwood and Multani Mitti in a small bowl.",
                        "Add rose water to form a thick paste.",
                        "Apply to the affected areas and leave for 15 minutes.",
                        "Rinse with lukewarm water."
                    )
                );
                
                formulationRepo.save(acneRemedy);

                System.out.println("Database seeded successfully!");
            }
        };
    }
}
