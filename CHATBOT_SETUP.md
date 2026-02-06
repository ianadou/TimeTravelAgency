# ⚠️ INSTRUCTIONS POUR CONFIGURER LE CHATBOT IA

## Étape 1: Obtenir une clé API Groq (gratuite)

1. Allez sur https://console.groq.com/
2. Créez un compte gratuit (pas de carte bancaire requise)
3. Allez dans "API Keys"
4. Cliquez sur "Create API Key"
5. Copiez la clé (commence par `gsk_...`)

## Étape 2: Configurer la clé dans le projet

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez la ligne par:
   ```
   GROQ_API_KEY=gsk_votre_cle_ici
   ```

## Étape 3: Redémarrer le serveur

```bash
# Ctrl+C pour arrêter le serveur dev
pnpm dev
```

## ✅ Le chatbot devrait maintenant fonctionner!

Vous verrez un bouton flottant en bas à droite avec une animation de pulsation.
Cliquez dessus pour ouvrir le chat et poser des questions sur les voyages temporels!

## 🧪 Questions test suggérées:

- "Quelle destination me recommandez-vous?"
- "Combien coûte un voyage à Paris 1889?"
- "Est-ce dangereux de voyager dans le temps?"
- "Comment fonctionne la réservation?"
- "Puis-je modifier le passé?"

---

## Dépannage

### Le chatbot ne répond pas ou affiche une erreur

1. Vérifiez que `.env.local` contient votre clé API
2. Vérifiez que vous avez redémarré le serveur après avoir ajouté la clé
3. Vérifiez dans la console du terminal s'il y a des erreurs
4. Vérifiez que la clé API est valide sur https://console.groq.com/

### Limite de requêtes dépassée

Le tier gratuit de Groq a des limites. Si vous atteignez la limite:
- Attendez quelques minutes
- Ou créez un nouveau compte avec un autre email
